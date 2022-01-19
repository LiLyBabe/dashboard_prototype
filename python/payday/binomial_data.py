import numpy as np
import pandas as pd
import string
import json
from scipy.stats import binom


def master_scale(upper_pd_inbound, upper_pd_outbound, no_rating):
    master_scale_df = pd.DataFrame()
    delta = (np.log(upper_pd_outbound) -
             np.log(upper_pd_inbound))/(no_rating-1)
    master_scale_df['Rating'] = [string.ascii_uppercase[i]
                                 for i in range(no_rating)]

    ln_scale_list = [np.log(upper_pd_inbound) + delta *
                     i for i in range(no_rating)]
    master_scale_df['Upper'] = np.exp(ln_scale_list)

    lower_list = list(master_scale_df['Upper'])
    lower_list.insert(0, 0)
    lower_list = [x + 0.0001 for x in lower_list[:-1]]
    master_scale_df['Lower'] = lower_list
    master_scale_df['Average'] = np.sqrt(
        master_scale_df['Lower'] * master_scale_df['Upper'])

    return master_scale_df


def get_binomial_data(loc, sheet_name, upper_pd_inbound, upper_pd_outbound, no_rating):
    test_set = pd.read_excel(loc, sheet_name, na_values=0)

    master_scale_df = master_scale(
        upper_pd_inbound, upper_pd_outbound, no_rating)

    binning = master_scale_df['Average'].append(pd.Series([1]))
    test_set['Rating'] = pd.cut(
        test_set.PD, bins=binning, labels=master_scale_df['Rating'])

    binomial_table = test_set['PD'].groupby(test_set['Rating']).count()
    binomial_table = binomial_table.to_frame()

    binomial_table.rename(columns={'PD': 'no_loan'}, inplace=True)
    binomial_table['no_default'] = test_set['Default'].groupby(
        test_set['Rating']).sum()
    binomial_table['PD'] = list(master_scale_df['Average'])
    binomial_table['lower_amount'] = binom.ppf(
        0.005, binomial_table['no_loan'], binomial_table['PD'])
    binomial_table['upper_amount'] = binom.ppf(
        0.995, binomial_table['no_loan'], binomial_table['PD'])
    binomial_table['difference'] = binomial_table['upper_amount'] - \
        binomial_table['lower_amount']

    return list(binomial_table['lower_amount']), list(binomial_table['difference']), list(binomial_table['no_default']), list(master_scale_df['Rating'])


if __name__ == '__main__':
    loc = 'D:\Epay\Epay\Data\Payday Data.xlsx'
    sheet_name = 'DatawPD'

    upper_pd_inbound = 0.05
    upper_pd_outbound = 0.9999
    no_rating = 10

    json_file = get_binomial_data(
        loc, sheet_name, upper_pd_inbound, upper_pd_outbound, no_rating)
    filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + \
        'payday_binomial_data' + '.json'

    with open(filePathName, 'w') as fp:
        json.dump(json_file, fp)


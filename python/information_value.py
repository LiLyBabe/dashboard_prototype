import pandas as pd
import numpy as np
import json
import matplotlib.pyplot as plt

# read & preprocess data
# df = pd.read_excel('D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx',
#                    sheet_name='Rand Post Data', na_values=0)

def data_processing(sliced_df):
    categories = []
    columns = sliced_df.columns.drop(['Default', 'ZIP'])

    for i in range(len(columns)):
        if len(np.unique(sliced_df[columns[i]])) == 2:
            categories.append(columns[i])

    new_columns = [x for x in columns if x not in categories]


    # Group categorical variable
    # Income Frequency
    sliced_df['Income Freq M'] = np.where(
        sliced_df['Income Freq M'] == 1, 2, sliced_df['Income Freq M'])
    sliced_df['Income F Weekly'] = np.where(
        sliced_df['Income F Weekly'] == 1, 3, sliced_df['Income F Weekly'])
    sliced_df['Income Frequency'] = sliced_df['Income F Weekly'] + \
        sliced_df['Income Freq M'] + sliced_df['Income Fortnightly']


    # Income Type
    sliced_df['Income Type Pension'] = np.where(
        sliced_df['Income Type Pension'] == 1, 2, sliced_df['Income Type Pension'])
    sliced_df['Income Type'] = sliced_df['Income Type Pension'] + \
        sliced_df['Income Type Employed']


    # Communication Preference
    sliced_df['Do note Text'] = np.where(
        sliced_df['Do note Text'] == 1, 2, sliced_df['Do note Text'])
    sliced_df['Communication Preference'] = sliced_df['Do note Text'] + \
        sliced_df['Do not Call']


    unwanted_names = {'Income Freq M', 'Income F Weekly', 'Income Fortnightly',
                    'Income Type Pension', 'Income Type Employed', 'Do note Text', 'Do not Call'}

    categories = [ele for ele in categories if ele not in unwanted_names]
    categories.extend(['Income Frequency', 'Income Type', 'Communication Preference'])

    new_columns.extend(categories)

    return new_columns, categories




def get_iv_data(loc,sheet_name):
    df = pd.read_excel(loc, sheet_name, na_values = 0)
    sliced_df = df.iloc[:, 4:27]

    new_columns = data_processing(sliced_df)[0]
    categories = data_processing(sliced_df)[1]

    result_table = pd.DataFrame()

    for i in range(len(new_columns)):
        if new_columns[i] not in categories:
            new_column_name = new_columns[i].replace(' ', '_').lower() + '_bins'

            # binning data based on each explaining variables
            sliced_df[new_column_name] = pd.qcut(
                sliced_df[new_columns[i]], q=4, labels=[1, 2, 3, 4])

            # create variable table to calculate IV
            variable_table = sliced_df[new_columns[i]].groupby(
                sliced_df[new_column_name]).count()
            variable_table = variable_table.to_frame()

            variable_table['bad_loans'] = sliced_df['Default'].groupby(
                sliced_df[new_column_name]).sum()
        else:
            variable_table = sliced_df['Default'].groupby(
                sliced_df[new_columns[i]]).count()
            variable_table = variable_table.to_frame()

            variable_table['bad_loans'] = sliced_df['Default'].groupby(
                sliced_df[new_columns[i]]).sum()

        variable_table['good_loans'] = variable_table.iloc[:, 0] - \
                variable_table.iloc[:, 1]

        variable_table['good_ratio'] = variable_table['good_loans'] / \
                sum(variable_table['good_loans'])

        variable_table['bad_ratio'] = variable_table['bad_loans'] / \
                sum(variable_table['bad_loans'])

        variable_table['IV'] = (variable_table['good_ratio'] - variable_table['bad_ratio']) * \
                np.log(variable_table['good_ratio']/variable_table['bad_ratio'])

        result_table[new_columns[i]] = [sum(variable_table.IV)]

        value_list = result_table.values.tolist()[0]
        order = np.argsort([element * (-1) for element in value_list])

        value_list = sorted(value_list, reverse = True)
        name_list = [list(result_table)[x] for x in order]

    return value_list, name_list


if __name__ == '__main__': 
    loc = 'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx'
    sheet_name = 'Rand Post Data'

    json_file = get_iv_data(loc, sheet_name)[0]
    filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'iv_data' + '.json' 

    with open(filePathName, 'w') as fp:
        json.dump(json_file, fp)

    json_column_file = get_iv_data(loc, sheet_name)[1]
    fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'iv_column_data' + '.json' 

    with open(fileName, 'w') as fp:
        json.dump(json_column_file, fp)

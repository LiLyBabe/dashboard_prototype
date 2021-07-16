import numpy as np
import pandas as pd
import json
from information_value import data_processing


def get_distribution_data(loc, sheet_name, first_col, last_col):
    df = pd.read_excel(loc, sheet_name, na_values = 0)
    sliced_df = df.iloc[:, first_col:last_col]

    process_data = data_processing(sliced_df)
    new_columns = process_data[0]
    new_columns.remove('PD')


    count_list = []
    pd_list = []

    for i in range(len(new_columns)):

        if len(np.unique(sliced_df[new_columns[i]])) > 24:
            new_column_name = new_columns[i].replace(' ', '_').lower() + '_bins'

            sliced_df[new_column_name] = pd.cut(sliced_df[new_columns[i]], bins = 20)

            # height of bars - counts of each bin
            count_list.append(list(sliced_df['Default'].groupby(sliced_df[new_column_name]).count()))

            # average pd in each bin
            filtered_list = list(sliced_df['PD'].groupby(sliced_df[new_column_name]).mean())
            filtered_list = [0 if np.isnan(x) else x for x in filtered_list]
            pd_list.append(filtered_list)

        else:
            # height of bars - counts of each bin
            count_list.append(list(sliced_df['Default'].groupby(sliced_df[new_columns[i]]).count()))

            # average pd in each bin
            filtered_list = list(sliced_df['PD'].groupby(sliced_df[new_columns[i]]).mean())
            filtered_list = [0 if np.isnan(x) else x for x in filtered_list]
            pd_list.append(filtered_list)


    return count_list, pd_list, new_columns


if __name__ == '__main__': 
    data_set = 'transformed'

    if data_set == 'raw':
        loc = 'D:\Epay\Epay\Dashboard\Proxy Payday Loan Data Corrected_Original.xlsx'
        sheet_name = 'Sheet1'
        first_col = 1
        last_col = 23

        # create raw count list
        json_file = get_distribution_data(loc, sheet_name,first_col,last_col)[0]
        filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'raw_count_list' + '.json' 

        with open(filePathName, 'w') as fp:
            json.dump(json_file, fp)

        # create raw pd list
        pd_list = get_distribution_data(loc, sheet_name, first_col,last_col)[1]
        fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'raw_pd_list' + '.json' 

        with open(fileName, 'w') as fp:
            json.dump(pd_list, fp)

        # create column list
        json_column_file = get_distribution_data(loc, sheet_name,first_col,last_col)[2]
        fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'distribution_column_list' + '.json' 

        with open(fileName, 'w') as fp:
            json.dump(json_column_file, fp)


    elif data_set == 'transformed':
        loc = 'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx'
        sheet_name = 'Rand Post Data'
        first_col = 4
        last_col = 28

        # create raw count list
        json_file = get_distribution_data(loc, sheet_name,first_col,last_col)[0]
        filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'transformed_count_list' + '.json' 

        with open(filePathName, 'w') as fp:
            json.dump(json_file, fp)

        # create raw pd list
        pd_list = get_distribution_data(loc, sheet_name, first_col,last_col)[1]
        fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'transformed_pd_list' + '.json' 

        with open(fileName, 'w') as fp:
            json.dump(pd_list, fp)

    else: 
        raise ValueError('No dataset found')


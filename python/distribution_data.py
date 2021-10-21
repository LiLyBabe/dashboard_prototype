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

    try: 
        new_columns.remove('latitude')
        new_columns.remove('longitude')
    except:
        pass

    count_list = []
    pd_list = []
    cate_dict = {}

    for i in range(len(new_columns)):

        if len(np.unique(sliced_df[new_columns[i]])) > 24:
            new_column_name = new_columns[i].replace(' ', '_').lower() + '_bins'

            sliced_df[new_column_name] = pd.cut(sliced_df[new_columns[i]], bins = 20)

            # store categories name in dict - name of x axis later based on column name 
            cate_names = list(sliced_df[new_column_name].dtype.categories)
            cate_dict[new_columns[i]] = [[t.left, t.right] for t in cate_names]

            # height of bars - counts of each bin
            count_list.append(list(sliced_df['Default'].groupby(sliced_df[new_column_name]).count()))

            # average pd in each bin
            filtered_list = list(sliced_df['PD'].groupby(sliced_df[new_column_name]).mean())
            filtered_list = [0 if np.isnan(x) else x for x in filtered_list]
            pd_list.append(filtered_list)

        else:
            # store categories name in dict - name of x axis later based on column name 
            cate_names = list(sliced_df['Default'].groupby(sliced_df[new_columns[i]]).count().index)
            cate_dict[new_columns[i]] = cate_names
            
            # height of bars - counts of each bin
            count_list.append(list(sliced_df['Default'].groupby(sliced_df[new_columns[i]]).count()))

            # average pd in each bin
            filtered_list = list(sliced_df['PD'].groupby(sliced_df[new_columns[i]]).mean())
            filtered_list = [0 if np.isnan(x) else x for x in filtered_list]
            pd_list.append(filtered_list)


    """
    Hardcoded !!!
    """

    cate_dict['Living Arrangement Own'] = ['Rent', 'Own']
    cate_dict['z_isMadeUpEmail'] = ['No', 'Yes']
    cate_dict['Origination Weekend'] = ['No', 'Yes']
    cate_dict['New Customer'] = ['Old', 'New']
    cate_dict['Income Frequency'] = ['Biweekly', 'Fortnightly', 'Monthly', 'Weekly']
    cate_dict['Income Type'] = ['Other', 'Employed', 'Pension']
    cate_dict['Communication Preference'] = ['Call & Text', 'Do not Call', 'Do not Text', 'Do not Call & Text']

    """
    End Hardcoded !!!
    """

    return count_list, pd_list, new_columns, cate_dict


if __name__ == '__main__': 
    data_set = 'raw'

    if data_set == 'raw':
        loc = 'D:\Epay\Epay\Dashboard\Proxy Payday Loan Data Corrected_Original.xlsx'
        sheet_name = 'Sheet1'
        first_col = 1
        last_col = 23

        func_result = get_distribution_data(loc, sheet_name,first_col,last_col)

        # create raw count list
        json_file = func_result[0]
        filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'raw_count_list' + '.json' 

        with open(filePathName, 'w') as fp:
            json.dump(json_file, fp)

        # create raw pd list
        pd_list = func_result[1]
        fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'raw_pd_list' + '.json' 

        with open(fileName, 'w') as fp:
            json.dump(pd_list, fp)

        # create column list
        json_column_file = func_result[2]
        fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'distribution_column_list' + '.json' 

        with open(fileName, 'w') as fp:
            json.dump(json_column_file, fp)

        # create categories dict
        dict_file = func_result[3]
        fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'categories_dict' + '.json' 

        with open(fileName, 'w') as fp:
            json.dump(dict_file, fp)


    elif data_set == 'transformed':
        loc = 'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx'
        sheet_name = 'Rand Post Data'
        first_col = 4
        last_col = 28

        func_result = get_distribution_data(loc, sheet_name,first_col,last_col)

        # create raw count list
        json_file = func_result[0]
        filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'transformed_count_list' + '.json' 

        with open(filePathName, 'w') as fp:
            json.dump(json_file, fp)

        # create raw pd list
        pd_list = func_result[1]
        fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'transformed_pd_list' + '.json' 

        with open(fileName, 'w') as fp:
            json.dump(pd_list, fp)

        # create column list
        json_column_file = func_result[2]
        fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'transformed_column_list' + '.json' 

        with open(fileName, 'w') as fp:
            json.dump(json_column_file, fp)

        # create categories dict
        dict_file = func_result[3]
        fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'transformed_categories_dict' + '.json' 

        with open(fileName, 'w') as fp:
            json.dump(dict_file, fp)

    else: 
        raise ValueError('No dataset found')


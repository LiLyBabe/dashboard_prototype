import numpy as np
import pandas as pd
import json

# df = pd.read_excel('D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx', sheet_name ='Rand Post Data')


def shifter(loc, sheet_name):
    df = pd.read_excel(loc, sheet_name)

    # Processing dataset
    sliced_df = df.iloc[:, 3:28]
    del sliced_df['ZIP']

    arr = sliced_df.columns.values
    idx = sliced_df.columns.get_loc('Default')

    # pos to move: end of the dataframe 
    pos_to_move = len(sliced_df.columns.values) - 1

    if idx == pos_to_move:
        pass
    else:
        arr[idx: pos_to_move] = arr[idx+1: pos_to_move+1]
    arr[pos_to_move] = 'Default'
    sliced_df = sliced_df.reindex(columns=arr)
    return sliced_df



def get_quantitative_data(loc, sheet_name):

    df = shifter(loc,sheet_name)

    # Create schema dictionary
    schema = []

    for i in range(len(df.columns)):
        my_dict = {}
        my_dict['name'] = df.columns[i].replace(' ', '_').lower()
        my_dict['text'] = df.columns[i]
        my_dict['index'] = i

        schema.append(my_dict)

    # Create dataset for quantitative graph
    data_list = df.to_numpy(na_value=0).tolist()

    return schema, data_list


if __name__ == '__main__':
    loc = 'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx'
    sheet_name = 'Rand Post Data'

    json_schema = get_quantitative_data(loc, sheet_name)[0]
    filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + \
        'quantitative_schema' + '.json'

    with open(filePathName, 'w') as fp:
        json.dump(json_schema, fp)

    json_data = get_quantitative_data(loc, sheet_name)[1]
    fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + \
        'quantitative_data' + '.json'

    with open(fileName, 'w') as fp:
        json.dump(json_data, fp)

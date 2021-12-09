import numpy as np
import pandas as pd
import json

# df = pd.read_excel('D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx', sheet_name ='Rand Post Data')


def shifter(loc, sheet_name):
    df = pd.read_excel(loc, sheet_name)
    col = df.columns.tolist()

    # Processing dataset - del ZIP attribute
    del df['Customer ZIP ( first 3 letters)']

    arr = df.columns.values.copy()
    idx = df.columns.tolist().index('Default')

    # pos to move: end of the dataframe 
    pos_to_move = len(df.columns.values) - 1

    if idx == pos_to_move:
        pass
    else:
        arr[idx: pos_to_move] = arr[idx+1: pos_to_move+1]
    arr[pos_to_move] = 'Default'
    df = df[arr.tolist()]
    return df



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
    loc = 'D:\Epay\Epay\Data\Payday Data.xlsx'
    sheet_name = 'AllData'

    all_data = get_quantitative_data(loc, sheet_name)
    root = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/'

    with open(root + 'payday_parallel_schema.json', 'w') as fp:
        json.dump(all_data[0], fp)

    with open(root + 'payday_parallel_data.json', 'w') as fp:
        json.dump(all_data[1], fp)

import numpy as np
import pandas as pd
import json

# df = pd.read_excel('D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx', sheet_name ='Rand Post Data')


def get_quantitative_data(loc, sheet_name):

    df = pd.read_excel(loc, sheet_name)

    # Processing dataset
    sliced_df = df.iloc[:,3:28]
    del sliced_df['ZIP']

    # Create schema dictionary
    schema = []

    for i in range(len(sliced_df.columns)):
        my_dict = {}
        my_dict['name'] = sliced_df.columns[i].replace(' ', '_').lower()
        my_dict['text'] = sliced_df.columns[i]
        my_dict['index'] = i

        schema.append(my_dict)

    # Create dataset for quantitative graph
    data_list = sliced_df.to_numpy(na_value = 0).tolist()

    return schema, data_list


if __name__ == '__main__': 
    loc = 'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx'
    sheet_name = 'Rand Post Data'

    json_schema = get_quantitative_data(loc, sheet_name)[0]
    filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'quantitative_schema' + '.json' 

    with open(filePathName, 'w') as fp:
        json.dump(json_schema, fp)


    json_data = get_quantitative_data(loc, sheet_name)[1]
    fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'quantitative_data' + '.json' 

    with open(fileName, 'w') as fp:
        json.dump(json_data, fp)

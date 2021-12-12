import pandas as pd
import numpy as np
import json

# df = pd.read_excel('D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx', sheet_name = 'Rand Post Data')

def get_heatmap_data(loc, sheet_name):
    df = pd.read_excel(loc, sheet_name)
    sliced_df = df.iloc[:,4:27]

    # calculate correlation coefficients
    df_corr = sliced_df.corr().round(decimals=3)

    # producing heatmap correlation list
    heatmap_list = []

    for i in range(len(df_corr)):
        for j in range(len(df_corr)):
            my_list = [i,j,df_corr.iloc[i,j]]
            heatmap_list.append(my_list)

    return heatmap_list, list(df_corr.columns)


if __name__ == '__main__': 
    loc = 'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx'
    sheet_name = 'Rand Post Data'

    json_file = get_heatmap_data(loc, sheet_name)[0]
    filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'heatmap_data' + '.json' 

    with open(filePathName, 'w') as fp:
        json.dump(json_file, fp)

    json_column_file = get_heatmap_data(loc, sheet_name)[1]
    fileName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'heatmap_column_data' + '.json' 

    with open(fileName, 'w') as fp:
        json.dump(json_column_file, fp)
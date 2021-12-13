import numpy as np
import pandas as pd
import json

# rand_post = pd.read_excel(
#     'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx', sheet_name='Rand Post Data')

def gini_total(loc,sheet_name):
    data = pd.read_excel(loc, sheet_name, na_values=0)
    data.sort_values(by=['PD'], ascending=False, inplace=True)
    N = len(data)
    D = data['Default'].sum()
    default = np.array(data.Default)
    proxy_data_arr = np.cumsum(default)
    num_arr = np.arange(N)+1
    best_arr = np.where(num_arr >=D, D, num_arr)
    worst_arr = num_arr*D/N

    return [proxy_data_arr.tolist(), best_arr.tolist(), worst_arr.tolist()]


if __name__ == '__main__':
    # params
    loc = 'D:\Epay\Epay\Data\Payday Data.xlsx'
    sheet_name = 'DatawPD'

    # write file
    fileLocation = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/'

    json_total = gini_total(loc, sheet_name)
    with open(fileLocation + 'payday_gini.json', 'w') as fp:
        json.dump(json_total, fp)

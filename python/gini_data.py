import numpy as np
import pandas as pd
import string
import json
from scipy.stats import binom

# rand_post = pd.read_excel(
#     'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx', sheet_name='Rand Post Data')

def gini_total(loc,sheet_name, pd_rate):
    data = pd.read_excel(loc, sheet_name, na_values=0)
    N = len(data)
    D = int(N * pd_rate)
    default = np.array(data.Default)
    proxy_data_arr = np.cumsum(default)
    num_arr = np.arange(N)
    best_arr = np.where(num_arr >=D, D, num_arr)
    worst_arr = (num_arr+1)*D/N

    return [proxy_data_arr.tolist(), best_arr.tolist(), worst_arr.tolist()]


def gini_existing(loc,sheet_name,pd_rate):
    data = pd.read_excel(loc, sheet_name, na_values=0)
    data = data[data['New Customer']==0]
    N = len(data)
    D = int(N * pd_rate)
    default = np.array(data.Default)
    proxy_data_arr = np.cumsum(default)
    num_arr = np.arange(N)
    best_arr = np.where(num_arr >=D, D, num_arr)
    worst_arr = (num_arr+1)*D/N

    return [proxy_data_arr.tolist(), best_arr.tolist(), worst_arr.tolist()]


def gini_new(loc,sheet_name,pd_rate):
    data = pd.read_excel(loc, sheet_name, na_values=0)
    data = data[data['New Customer']==1]
    N = len(data)
    D = int(N * pd_rate)
    default = np.array(data.Default)
    proxy_data_arr = np.cumsum(default)
    num_arr = np.arange(N)
    best_arr = np.where(num_arr >=D, D, num_arr)
    worst_arr = (num_arr+1)*D/N

    return [proxy_data_arr.tolist(), best_arr.tolist(), worst_arr.tolist()]


if __name__ == '__main__':
    # params
    loc = 'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx'
    sheet_name = 'Rand Post Data'
    pd_rate = 0.10

    # write file
    fileLocation = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/'

    giniTotalPath = fileLocation + 'gini_total' + '.json'
    json_total = gini_total(loc, sheet_name, pd_rate)
    with open(giniTotalPath, 'w') as fp:
        json.dump(json_total, fp)

    giniExistingPath = fileLocation + 'gini_existing' + '.json'
    json_existing = gini_existing(loc, sheet_name, pd_rate)
    with open(giniExistingPath, 'w') as fp:
        json.dump(json_existing, fp)

    giniNewPath = fileLocation + 'gini_new' + '.json'
    json_new = gini_new(loc, sheet_name, pd_rate)
    with open(giniNewPath, 'w') as fp:
        json.dump(json_new, fp)

import numpy as np
import pandas as pd
import json

# df = pd.read_excel('D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx', sheet_name ='Rand Post Data')


def t2d_data(loc, sheet_name):
    df = pd.read_excel(loc,sheet_name)

    # Processing dataset
    sliced_df = df.iloc[:, 3:28]
    del sliced_df['ZIP']
    # sliced_df.info()
    default_df = sliced_df[sliced_df.Default == 1]
    t2d_series = default_df['Loan Term (days)'].groupby(
                        default_df['Loan Term (days)']).count()
    t2d_index = t2d_series.index.tolist()
    t2d_values = t2d_series.values.tolist()

    return [t2d_index, t2d_values]


if __name__ == '__main__':
    loc = 'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx'
    sheet_name = 'Rand Post Data'

    json_data = t2d_data(loc, sheet_name)
    filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + \
        't2d_data' + '.json'

    with open(filePathName, 'w') as fp:
        json.dump(json_data, fp)


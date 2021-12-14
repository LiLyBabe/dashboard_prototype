import numpy as np
import pandas as pd
import string
import json


def distribution_data(loc, sheet_name):
    df = pd.read_excel(loc, sheet_name)
    col = df.columns.tolist()

    count_dict = {}
    default_dict = {}

    for i in range(len(col)):
        if isinstance(df[col[i]][0], str):
            category = df[col[i]]
        else:
            category = pd.cut(df[col[i]], bins=5)

        count_series = df[col[i]].groupby(category).count()
        count_series.index = count_series.index.astype(str)
        count_dict[col[i]] = count_series.to_dict()

        default_series = df['Default'].groupby(category).sum()/sum(df['Default'])
        default_series.index = default_series.index.astype(str)
        default_dict[col[i]] = default_series.to_dict()

    return count_dict, default_dict


if __name__ == '__main__':
    loc = 'D:\Epay\Epay\Data\Payday Data.xlsx'
    sheet_name = 'AllData'

    two_dicts = distribution_data(loc,sheet_name)
    root = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/'

    with open(root + 'payday_distribution_data.json', 'w') as fp:
        json.dump(two_dicts[0], fp)
    with open(root + 'payday_default_data.json', 'w') as fp:
        json.dump(two_dicts[1], fp)

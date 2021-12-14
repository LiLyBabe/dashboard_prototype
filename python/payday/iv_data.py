from types import new_class
import pandas as pd
import numpy as np
import json
import matplotlib.pyplot as plt


def get_iv_data(loc,sheet_name):
    df = pd.read_excel(loc, sheet_name, na_values = 0)
    columns = df.columns.tolist()
    new_columns = columns[3:]
    del new_columns[1]

    data_len = len(df)
    no_default = df.Default.sum()

    my_dict = {}
    for i in range(len(new_columns)):
        if isinstance(df[new_columns[i]][0],str):
            my_s = df[new_columns[i]].groupby(df[new_columns[i]]).count()
            att_table = pd.DataFrame(my_s)
            att_table['Bad'] = df['Default'].groupby(df[new_columns[i]]).sum()
        else:
            category = pd.cut(df[new_columns[i]], bins=5)
            att_table = pd.DataFrame(df[new_columns[i]].groupby(category).count())
            att_table['Bad'] = df['Default'].groupby(category).sum()
            att_table.index = att_table.index.astype('string')
        
        att_table.rename(columns={new_columns[i]:'Total'}, inplace=True)
        att_table['Good'] = att_table.iloc[:,0]-att_table.iloc[:,1]
        att_table['good_odd'] = att_table['Good']/(data_len-no_default)
        att_table['bad_odd'] = att_table['Bad']/no_default
        att_table['WoE'] = np.log(att_table['good_odd']/att_table['bad_odd'])
        att_table['IV'] = (att_table['good_odd']-att_table['bad_odd'])*att_table['WoE']
        att_table['IV'][att_table.IV == np.inf] = 0

        att_table = att_table.to_json(orient = 'split')
        att_table = json.loads(att_table)
        my_dict[new_columns[i]] = att_table
        
    return my_dict


if __name__ == '__main__': 
    loc = 'D:\Epay\Epay\Data\Payday Data.xlsx'
    sheet_name = 'AllData'

    json_file = get_iv_data(loc, sheet_name)
    filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + 'payday_iv_row_data.json' 

    with open(filePathName, 'w') as fp:
        json.dump(json_file, fp)


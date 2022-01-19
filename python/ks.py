from pandas import pandas as pd
from pandas import DataFrame
import json
#K/S: 
def df_for_ks(loc,sheet_name,num):
    df = pd.read_excel(loc,sheet_name = sheet_name)
    df2 = df[['PD','Default']] 
    #num==0, it is good and vice versa
    df_good = df2.loc[df2['Default'] == num]
    df_good = df_good.sort_values(by=["PD"])
    df_good.reset_index()
    df = DataFrame(df_good['PD'].to_list(),columns = ['Col'])
    df['Frequency'] = pd.cut(df['Col'], 30).astype(str)
    df.sort_values(by=['Col'],inplace = True,ignore_index = True)
    df2 = df['Frequency'].value_counts().sort_index(ascending=True).to_frame().reset_index()
    return [df2['index'].to_list(),df2['Frequency'].to_list()]

if __name__ == '__main__':
    loc = '/Users/ntmy99/EPAY/Eximbank_demo/Unsecured Laon Tape with PD Dec 2021.xlsx'
    sheet_name = 'RawData'
    fileLocation = '/Users/ntmy99/EPAY/Eximbank_demo/'
    
    ks_good_path = fileLocation + 'ks_good' + '.json'
    good = df_for_ks(loc,sheet_name,0)
    with open(ks_good_path, 'w') as fp:
            json.dump(good, fp)    

    ks_bad_path = fileLocation + 'ks_bad' + '.json'
    bad = df_for_ks(loc,sheet_name,1)
    with open(ks_bad_path, 'w') as fp:
            json.dump(bad, fp)            



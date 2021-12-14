import numpy as np
import pandas as pd
import json

df = pd.read_excel('D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx', sheet_name ='Rand Post Data')


def day_past_due(loc, sheet_name):
    df = pd.read_excel(loc,sheet_name)
    sliced_df = df[['Default','oc_AmountPaidbyDueDate',
       'oc_AmountPaidWithinDDto7daysofDueDate',
       'oc_AmountPaidWithin7to30daysofDueDate',
       'oc_AmountPaidWithin30to90daysofDueDate', 'oc_AmountPaidGT90']]
    sliced_df.columns=['Default','OnDueDate','Within7Days','Within30Days',
                        'Within90Days','OnDay90']
    sliced_df['LastDay'] = sliced_df.replace(0,np.nan).apply(
                            pd.DataFrame.last_valid_index, axis=1)
    m = sliced_df['LastDay'].groupby(sliced_df['LastDay']).count()
    m = m.reindex(index=['OnDueDate','Within7Days','Within30Days', 
                            'Within90Days','OnDay90','Default'])

    return m.index.tolist(), m.values.tolist()


if __name__ == '__main__':
    loc = 'D:\Epay\Epay\Dashboard\Python code\Proxy Payday Loan Data Corrected.xlsx'
    sheet_name = 'Rand Post Data'

    json_data = day_past_due(loc, sheet_name)
    filePathName = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/' + \
        'day_past_due_data' + '.json'

    with open(filePathName, 'w') as fp:
        json.dump(json_data, fp)


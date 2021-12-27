def get_gini(loc, sheet):
    df = pd.read_excel(loc,sheet_name = sheet)
    df_2 = df[['PD','Default']]
    gini_df = df_2.sort_values(by=["PD"],ascending=False)
    gini_df.reset_index()
    D = sum(gini_df['Default'])
    N = len(gini_df['Default'])
    default = np.array(gini_df.Default)
    proxy_data_arr = np.cumsum(default)
    num_arr = np.arange(N)+1
    best_arr = np.where(num_arr >=D, D, num_arr)
    worst_arr = (num_arr+1)*D/N
    return [proxy_data_arr.tolist(), best_arr.tolist(), worst_arr.tolist()]

if __name__ == '__main__':
    loc = '/Users/ntmy99/EPAY/Eximbank_demo/Unsecured Laon Tape with PD Dec 2021.xlsx'
    sheet_name = 'RawData'
    fileLocation = '/Users/ntmy99/EPAY/Eximbank_demo/'

    json_total = get_gini(loc, sheet_name)
    with open(fileLocation + 'gini.json', 'w') as fp:
        json.dump(json_total, fp)
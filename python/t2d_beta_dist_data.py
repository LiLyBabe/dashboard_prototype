import numpy as np
import pandas as pd
from scipy.stats import beta
import matplotlib.pyplot as plt
import json


def t2d_beta_data(min_val,max_val,alpha_val, beta_val,no_default):
    # Calculation
    tad = np.array([range(1,max_val+1)])
    beta_pdf = beta.pdf(tad, alpha_val, beta_val, loc=min_val, scale=max_val-min_val)
    beta_pdf_std = beta_pdf/beta_pdf.sum()
    bad_loans = np.round(beta_pdf_std* no_default)

    return bad_loans.tolist()[0]


if __name__ == '__main__':
    # Define beta distribution variables
    min_val = 2
    max_val = 36
    alpha_val = 1.58
    beta_val = 4.25 
    no_default = 1200

    fileLocation = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/'

    t2d_beta = fileLocation + 't2d_beta_data' + '.json'
    json_new = t2d_beta_data(min_val,max_val,alpha_val, beta_val,no_default)
    with open(t2d_beta, 'w') as fp:
        json.dump(json_new, fp)

    # plt.bar(tad.tolist()[0], loans.tolist()[0])
    # plt.show()
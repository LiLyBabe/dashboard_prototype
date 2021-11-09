import numpy as np
import pandas as pd
from scipy.stats import norm
import matplotlib.pyplot as plt
import json


def correlated_bad_loans(average_pd, N, num_simulation, avg_corr):
    threshold = norm.ppf(average_pd)
    corr_matrix = np.zeros((N,N))+avg_corr
    np.fill_diagonal(corr_matrix, 1)
    cholesky = np.linalg.cholesky(corr_matrix)

    ele = np.random.normal(size=(num_simulation,N))

    corr_rand = np.matmul(ele,cholesky)
    corr_rand_2 = np.where(corr_rand<threshold,1,0)

    num_debt = np.sum(corr_rand_2, axis=1)

    bin_list = plt.hist(num_debt, bins=25)[0].tolist()
    cl_value = np.round(np.percentile(num_debt,[99,99.5,99.9]))
    return bin_list, cl_value.tolist()

if __name__ == '__main__':
    average_pd = 0.05
    N = 5000 
    num_simulation = 10000
    # avg_corr = 0.03
    # cl = 99.9

    fileLocation = 'D:/Epay/Epay/Dashboard/dashboard_prototype/data/'

    no_corr_data = correlated_bad_loans(average_pd, N, num_simulation, avg_corr = 0)
    with open(fileLocation + 'bad_loans_no_corr.json', 'w') as fp:
        json.dump(no_corr_data, fp)

    basil2_corr_data = correlated_bad_loans(average_pd, N, num_simulation, avg_corr = 0.03)
    with open(fileLocation + 'bad_loans_basil2_corr.json', 'w') as fp:
        json.dump(basil2_corr_data, fp)

    extreme_corr_data = correlated_bad_loans(average_pd, N, num_simulation, avg_corr = 0.05)
    with open(fileLocation + 'bad_loans_extreme_corr.json', 'w') as fp:
        json.dump(extreme_corr_data, fp)
$.get('https://monex-p.github.io/dashboard_prototype/data/payday_iv_row_data.json', function (iv_data) {
    var key_values = Object.keys(iv_data) //Not change

    // first create a TABLE structure by adding few headers.
    function createTable(no_index, table_id) {

        var first_name = key_values[no_index] //Change this 
        var my_index = Object.values(iv_data[first_name]['index'])

        var columns;
        columns = [first_name, "Total", "Bad Loans", "Good Loans", "Good Odds", "Bad Odds", "WoE", "IV"]; 
        // table headers FIXED - could change later.

        var empTable = document.createElement('table');

        var tr = empTable.insertRow(-1);

        for (var h = 0; h < columns.length; h++) {
            var th = document.createElement('th'); // the header object.
            th.innerHTML = columns[h];
            tr.appendChild(th);
        }

        for (j = 0; j < my_index.length; j++) {
            var first_data = Object.values(iv_data[first_name]['data'])[j];
            first_data.unshift(my_index[j]);
            var tr1 = empTable.insertRow(-1);
            for (var i = 0; i < first_data.length; i++) {
                var td = document.createElement('td')
                td.innerHTML = first_data[i]
                tr1.appendChild(td)
            }
        }


        var div = document.getElementById(table_id); //Change this
        div.appendChild(empTable);    // add table to a container.
    }

    createTable(0,'customer_type_table')
    createTable(1,'store_id_table')
    createTable(2,'loan_amount_table')
    createTable(3,'net_monthly_income_table')
    createTable(4,'income_type_table')
    createTable(5,'address_duration_table')
    createTable(6,'income_duration_table')
    createTable(7,'previous_loan_count_table')

}); 

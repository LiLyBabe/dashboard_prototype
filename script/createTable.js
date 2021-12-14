$.get('https://monex-p.github.io/dashboard_prototype/data/payday_iv_data.json', function (iv_data) {
    var key_values = Object.keys(iv_data) //Not change
    var all_columns = Object.keys(iv_data[key_values[0]]) //Not change
    var name_groups = Object.keys(iv_data[key_values[0]][all_columns[0]]) //Change number of attributes of keys from 0 to key_values.length

    var arrHead;
    arrHead = [key_values[0], 'N', 'Bad', 'Odds', 'Information Value']; // table headers.

    // first create a TABLE structure by adding few headers.
    function createTable() {
        var empTable = document.createElement('table');
        empTable.setAttribute('id', 'empTable');  // set table id 'empTable'.

        var tr = empTable.insertRow(-1);

        for (var h = 0; h < arrHead.length; h++) {
            var th = document.createElement('th'); // the header object.
            th.innerHTML = arrHead[h];
            tr.appendChild(th);
        }
        
        var tr = empTable.insertRow(-1);
        for (var i=0; i < name_groups.length;i++){
            var td = document.createElement('td')
            td.innerHTML = name_groups[i]
            tr.appendChild(td)
        }

        var div = document.getElementById('customer_type_table');
        div.appendChild(empTable);    // add table to a container.
    }
    createTable()


    // function to add new row.
    function addRow() {
        var empTab = document.getElementById('empTable');

        var rowCnt = empTab.rows.length;    // get the number of rows.
        var tr = empTab.insertRow(rowCnt); // table row.
        tr = empTab.insertRow(rowCnt);

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td');          // TABLE DEFINITION.
            td = tr.insertCell(c);

            if (c == 0) {   // if its the first column of the table.
                // add a button control.
                var button = document.createElement('input');

                // set the attributes.
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Remove');

                // add button's "onclick" event.
                button.setAttribute('onclick', 'removeRow(this)');

                td.appendChild(button);
            }
            else {
                // the 2nd, 3rd and 4th column, will have textbox.
                var ele = document.createElement('input');
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', '');

                td.appendChild(ele);
            }
        }
    }

}); 

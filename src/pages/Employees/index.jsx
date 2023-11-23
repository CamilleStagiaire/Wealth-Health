function Employees() {
  return (
    <main className="employees">
      <h1>Current Employees</h1>
      <div className="dataTable">
        <div className="dataTable-search">
          <div className="dataTables_length" id="employee-table_length">
            <label>
              Show
              <select
                name="employee-table_length"
                aria-controls="employee-table"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
            </label>
          </div>
          <div id="employee-table_filter" className="dataTables_filter">
            <label>
              Search:
              <input
                type="search"
                placeholder="search"
                aria-controls="employee-table"
              />
            </label>
          </div>
        </div>

        <table
          id="employee-table"
          className="dataTable-display"
          aria-describedby="employee-table_info"
        >
          <thead>
            <tr role="row">
              <th
                className="sorting_asc"
                aria-label="First Name: activate to sort column descending"
                tabindex="0"
                aria-controls="employee-table"
              >
                First Name
              </th>
              <th
                className="sorting"
                aria-label="Last Name: activate to sort column ascending"
                tabindex="0"
                aria-controls="employee-table"
              >
                Last Name
              </th>
              <th
                className="sorting"
                aria-label="Start Date: activate to sort column ascending"
                tabindex="0"
                aria-controls="employee-table"
              >
                Start Date
              </th>
              <th
                className="sorting"
                aria-label="Department: activate to sort column ascending"
                tabindex="0"
                aria-controls="employee-table"
              >
                Department
              </th>
              <th
                className="sorting"
                aria-label="Date of Birth: activate to sort column ascending"
                tabindex="0"
                aria-controls="employee-table"
              >
                Date of Birth
              </th>
              <th
                className="sorting"
                aria-label="Street: activate to sort column ascending"
                tabindex="0"
                aria-controls="employee-table"
              >
                Street
              </th>
              <th
                className="sorting"
                aria-label="City: activate to sort column ascending"
                tabindex="0"
                aria-controls="employee-table"
              >
                City
              </th>
              <th
                className="sorting"
                aria-label="State: activate to sort column ascending"
                tabindex="0"
                aria-controls="employee-table"
              >
                State
              </th>
              <th
                className="sorting"
                aria-label="Zip Code: activate to sort column ascending"
                tabindex="0"
                aria-controls="employee-table"
              >
                Zip Code
              </th>
             
              
            </tr>
          </thead>
          <tbody>
         
            <tr role="row">
              <td className="sorting_1">Prénom</td>
              <td>Nom</td>
              
            </tr>
           
          </tbody>
        </table>
       
      </div>
    </main>
  );
}

export default Employees;

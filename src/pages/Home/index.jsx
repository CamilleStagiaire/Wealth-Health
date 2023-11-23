function Home() {

  const saveEmployee = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <div className="container">
        <h1>Create Employee</h1>
        <form id="create-employee">
          <div className="form-group">
            <div className="form-group-label">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" />
            </div>
            <div className="form-group-label">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group-label">
              <label htmlFor="date-of-birth">Date of Birth</label>
              <input id="date-of-birth" type="text" />
            </div>
            <div className="form-group-label">
              <label htmlFor="start-date">Start Date</label>
              <input id="start-date" type="text" />
            </div>
          </div>

          <div className="form-group">
            <fieldset className="form-group-label address">
              <legend>Address</legend>
              <div className="address-group">
                <label htmlFor="street">Street</label>
                <input id="street" type="text" />
              </div>
              <div className="address-group">
                <label htmlFor="city">City</label>
                <input id="city" type="text" />
              </div>
              <div className="address-group">
                <label htmlFor="state">State</label>
                <select name="state" id="state"></select>
              </div>
              <div className="address-group">
                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" />
              </div>
            </fieldset>
            <div className="form-group-label">
              <label htmlFor="department">Department</label>
              <select name="department" id="department">
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
                <option value="engineering">Engineering</option>
                <option value="hr">Human Resources</option>
                <option value="legal">Legal</option>
              </select>
            </div>
          </div>
        </form>

        <button className="save" onClick={saveEmployee}>Save</button>
      </div>
    </main>
  );
}

export default Home;

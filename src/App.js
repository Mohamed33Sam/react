import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="container">
        <div class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
            ></input>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            ></input>
          </div>
          <div class="col-12">
            <select class="form-select" id="autoSizingSelect">
              <option selected>Age...</option>
              <option value="1">18</option>
              <option value="2">19</option>
              <option value="3">20</option>
            </select>
          </div>
          <div class="col-md-12">
            <label class="visually-hidden" for="autoSizingInputGroup">
              Username
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control"
                id="autoSizingInputGroup"
                placeholder="Username"
              ></input>
            </div>
          </div>
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4"></input>
          </div>

          <div class="col-md-12">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
            ></input>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            ></input>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
              ></input>
              <label class="form-check-label" for="gridCheck">
                I agree with terms and conditions
              </label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
              ></input>
              <label class="form-check-label" for="gridCheck">
                Remember me
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
          <div className="coppy">
            <p>© 2021 All rights reserved. for Mohamed_Essam.</p>
            <p>Don't worry we will share all your info.</p>
            <p>We don't respect your privacy</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;

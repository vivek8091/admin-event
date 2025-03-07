function Login() {
  return (
    <>
      <section className="login-section">
        <div className="login-form">
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Remember Me
              </label>
            </div>

            <button type="submit" class="btn btn-primary w-100">
              Log In
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;

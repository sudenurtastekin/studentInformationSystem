export default function LoginPage() {
  return (
    <div className="LoginContent">
      <h1>LOGIN</h1>
      <form clasName="LoginForm">
        <label htmlFor="email">Email:</label> <br />
        <input id="email" name="email" type="email" required /> <br />
        <label htmlFor="password">Password:</label> <br />
        <input id="password" name="password" type="password" required /> <br />
      </form>
    </div>
  )
}
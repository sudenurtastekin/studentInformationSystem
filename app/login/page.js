import { login } from './actions'

export default function LoginPage() {
  return (
    <div className="LoginContent">
      <h1>LOGIN</h1>
      <form clasName="LoginForm">
        <label htmlFor="email">Email:</label> <br />
        <input id="email" name="email" type="email" required /> <br />
        <label htmlFor="password">Password:</label> <br />
        <input id="password" name="password" type="password" required /> <br />
        <div className="LSbuttons">
          <button formAction={login}>Log in</button> 
        </div>
      </form>
    </div>
  )
}

export async function signup(formData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
    firstName: formData.get('name'),
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/user', 'layout')
  redirect('/user')
}
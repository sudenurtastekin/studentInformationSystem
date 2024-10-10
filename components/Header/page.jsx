import { signOut } from "@/actions/auth";
import { createClient } from "@/utils/supabase/server"
import Link from "next/link";
import Home from "@/app/page"


export default async function Header() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  console.log(user);

  return (
    <ul>
      {user ? (
        <div className="admin-header">
          <span>Hello <em><strong>{user.email}</strong></em></span>
          <form action={signOut}>
            <button className="cikis">Çıkış Yap</button>
          </form>
        </div>
      ) : (
        <>
          <Home/>
        </>
      )}
    </ul>
  )
}
import styles from "./page.module.css";
import LoginPage from "./login/page";
import SignUPPage from "./signup/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="login-sign-content">
      <h1>Öğrenci Bilgi Sistemi</h1>
      <p>Öğrenci ve yönetici kullanıcılar sisteme giriş yaparak bilgilere erişebilir.</p>
      <div class="LSbuttons">
        <Link href={'/login'}>Login</Link>
        <Link href={'/signup'}>Signup</Link>
      </div>
    </div>
    
  );
}

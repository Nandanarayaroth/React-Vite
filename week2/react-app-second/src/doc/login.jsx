import { useState } from "react"

function Login() {

    const [isLogin, setIsLogin] = useState(false)

    const handleLogin = () => {
        setIsLogin(
            !isLogin
        )
    }

    return( 
        <div className="flex flex-col justify-center  mt-12">
            <button className="px-4 py-2 bg-amber-800 text-white rounded" onClick={handleLogin}>{isLogin ? "LogOut" : "Login"}</button>
            <div>
                <h3 className="mt-2 text-base font-medium">{isLogin ? "Thanks for login" : "Now your logedout"}</h3>
            </div>
            
        </div>
    )
}

export default Login
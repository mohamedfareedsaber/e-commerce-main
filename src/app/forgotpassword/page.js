import Link from "next/link"
import { BsFillEnvelopeFill } from "react-icons/bs";
import './Forgot.css'
export default function Forgot() {
    return (
        <>

            <title>Reset Password</title>
            <div className="wrapper">
                <div className="container">
                    <div className="title-section">
                        <h2 className="title">Reset Password</h2>
                        <p className="para">Enter your email send link your email please check</p>

                    </div>
                    <form>
                        <div className="input-group">
                            <label className="label-title">Enter your email</label>
                            <input type="email" name="email" placeholder="Email" />
                            <span className="icon"><BsFillEnvelopeFill /></span>
                        </div>
                        <div className="input-group">
                            <Link href="/"><button className="submite">Send Reset email</button></Link>

                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

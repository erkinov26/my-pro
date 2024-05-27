import { useNavigate } from "react-router-dom";
import { instance } from "../../Api";
import SignUpImageLeft from "../../assets/SignUpImageLeft.png";
import { FormEvent } from "react";
import Cookies from "js-cookie";
export default function SignUp() {
	const navigate = useNavigate();
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;

		const formData = new FormData(form);

		const body = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			key: formData.get("key") as string,
			secret: formData.get("secret") as string,
		};

		await instance.post("signup", body).then((data) => {
			const myData = data.data.data;
			Cookies.set("Key", myData.key);
			Cookies.set("Sign", "2892678138d8d793a28fc49055095d8b");
			console.log(myData);
			navigate('/books')
		});
	};

	return (
		<div className="signInSection">
			<div className="signInLeft">
				<img
					src={SignUpImageLeft}
					alt={SignUpImageLeft}
					className="signInLeftImg"
				/>
			</div>
			<div className="signInRight">
				<form
					className="signInForm"
					onSubmit={handleSubmit}>
					<h1 className="signInTitle">Sign up</h1>
					<p className="questionText">
						Already have an account ?{" "}
						<span className="innerQuestionText">Sign in</span>
					</p>
					<input
						type="text"
						name="name"
						className="FormInput"
						placeholder="Name"
					/>
					<input
						type="text"
						name="email"
						className="FormInput"
						placeholder="Email"
					/>
					<input
						type="text"
						name="key"
						className="FormInput"
						placeholder="Key"
					/>
					<input
						type="text"
						name="secret"
						className="FormInput"
						placeholder="Secret"
					/>
					<button
						className="logBtn"
						type="submit">
						Next step
					</button>
				</form>
			</div>
		</div>
	);
}

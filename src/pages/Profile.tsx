import { useState, type ReactNode } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";

export default function Profile(): ReactNode {
	const [isShow, setIsShow] = useState<boolean>(false);
	const [name, setName] = useState<string>(
		(localStorage.getItem("name") as string) ?? "Mahmoud Elsayed"
	);
	const [email, setEmail] = useState<string>(
		(localStorage.getItem("email") as string) ?? "mahmoud.elsayed@gmail.com"
	);
	const [password, setPassword] = useState<string>(
		(localStorage.getItem("password") as string) ?? "M123456es"
	);

	const navigate = useNavigate();
	const updateUserData = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		localStorage.setItem("name", name);
		localStorage.setItem("email", email);
		localStorage.setItem("password", password);
		toast.success("All set! Your details have been updated successfully.");
		navigate("/");
	};

	return (
		<>
			<div className="p-4 w-full">
				<div className="flex gap-4 items-center">
					<div className="h-20 w-20">
						<img
							src="https://i.postimg.cc/8PNJ3nBk/mahmoud-elsayed.jpg"
							alt="user-img"
							className="rounded-full"
						/>
					</div>
					<div className="">
						<h1 className="text-3xl">{name}</h1>
						<p className="text-button-foreground">{email}</p>
					</div>
				</div>
				<hr className="my-4 border-button-background" />
				<form className="flex flex-col gap-4" onSubmit={updateUserData}>
					<input
						type="text"
						placeholder="Full Name"
						className="w-fit bg-white px-4 py-2 rounded-full min-w-[300px] sm:min-w-[400px]"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<input
						type="email"
						placeholder="Email Address"
						className="w-fit bg-white px-4 py-2 rounded-full min-w-[300px] sm:min-w-[400px]"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<div className="flex items-center gap-2 relative w-fit">
						<input
							type={`${isShow ? "text" : "password"}`}
							placeholder="Password"
							className="w-fit bg-white px-4 py-2 rounded-full min-w-[300px] sm:min-w-[400px]"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div
							className="absolute right-4 z-10 cursor-pointer text-2xl text-button-foreground"
							onClick={() => setIsShow((prev) => !prev)}
						>
							{!isShow && <BiShow />}
							{isShow && <BiHide />}
						</div>
					</div>

					<button className="button w-fit px-6 py-2 rounded-full hover:bg-button-active-background hover:text-main-background">
						Update
					</button>
				</form>
			</div>
		</>
	);
}

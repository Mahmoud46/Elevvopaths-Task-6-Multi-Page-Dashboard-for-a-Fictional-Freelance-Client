import type { ReactNode } from "react";

export function CircularIconButton({
	icon,
	text,
	onClick = () => {},
	className = "",
}: {
	icon: ReactNode;
	text?: string;
	onClick?: () => void;
	className?: string;
}): ReactNode {
	return (
		<button
			className={`text-xl h-10 ${
				!text && "w-10"
			} flex items-center gap-2 px-2 justify-center rounded-full cursor-pointer duration-300 transition-all ease-in-out ${className}`}
			onClick={onClick}
		>
			{icon}
			{text && <span className="text-[14px]">{text}</span>}
		</button>
	);
}

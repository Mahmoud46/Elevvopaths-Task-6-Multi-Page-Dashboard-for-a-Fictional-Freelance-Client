import type { ReactNode } from "react";

export function KPICard({
	icon,
	title,
	value,
}: {
	icon: ReactNode;
	title: string;
	value: string;
}): ReactNode {
	return (
		<div className="flex flex-col bg-button-background p-2 rounded-2xl sm:min-w-[180px] min-w-[150px]">
			<div className="flex gap-2 items-center text-button-foreground">
				<div className="text-xl">{icon}</div>
				<h2 className="sm:text-[14px] text-[12px]">{title}</h2>
			</div>
			<p className="self-end text-2xl">{value}</p>
		</div>
	);
}

export function RAFCard({
	content,
	date,
	className = "",
}: {
	content: string;
	date: string;
	className?: string;
}): ReactNode {
	return (
		<div
			className={`flex flex-col items-start bg-white rounded-2xl p-2 gap-1 shadow-md ${className}`}
		>
			<p>{content}</p>
			<span className="min-w-fit self-end rounded-full text-xs text-button-foreground">
				{date}
			</span>
		</div>
	);
}

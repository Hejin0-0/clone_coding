import Image from "next/image";

export function EmptyFavorites() {
	return (
		<div className="h-full flex flex-col items-center justify-center">
			<Image
				src="/empty-favorites.svg"
				alt="Empty Favorites"
				height={140}
				width={140}
			/>
			<h2 className="text-2xl font-semibold mt-6">No favorite boards</h2>
			<p className="text-muted-foreground">Try favorite a board</p>
		</div>
	);
}

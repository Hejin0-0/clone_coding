"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "@/liveblocks.config";
import { Children, ReactNode } from "react";

interface RoomProps {
	children: ReactNode;
	roomId: string;
	fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
	return (
		<RoomProvider id={roomId} initialPresence={{}}>
			<ClientSideSuspense fallback={fallback}>
				{() => children}
			</ClientSideSuspense>
		</RoomProvider>
	);
};

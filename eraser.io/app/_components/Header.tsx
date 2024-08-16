// https://www.hyperui.dev/

import React from "react";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

function Header() {
	return (
		<header className="bg-black">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<Image src="/logo-1.png" alt="logo" width={100} height={100} />

				<div className="flex flex-1 items-center justify-end md:justify-between">
					<nav aria-label="Global" className="hidden md:block">
						<ul className="flex items-center gap-6 text-sm">
							<li>
								<a
									className="text-white transition hover:text-gray-100"
									href="#"
								>
									{" "}
									About{" "}
								</a>
							</li>

							<li>
								<a
									className="text-white transition hover:text-gray-100/75"
									href="#"
								>
									{" "}
									Careers{" "}
								</a>
							</li>

							<li>
								<a
									className="text-white transition hover:text-gray-100/75"
									href="#"
								>
									{" "}
									History{" "}
								</a>
							</li>

							<li>
								<a
									className="text-white transition hover:text-gray-100/75"
									href="#"
								>
									{" "}
									Services{" "}
								</a>
							</li>

							<li>
								<a
									className="text-white transition hover:text-gray-100/75"
									href="#"
								>
									{" "}
									Projects{" "}
								</a>
							</li>
						</ul>
					</nav>

					<div className="flex items-center gap-4">
						<div className="sm:flex sm:gap-4">
							<a
								className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition"
								href="#"
							>
								<LoginLink postLoginRedirectURL="/dashboard">
									Login
								</LoginLink>
							</a>

							<a
								className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-slate-800 sm:block"
								href="#"
							>
								<RegisterLink>Register</RegisterLink>
							</a>
						</div>

						<button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
							<span className="sr-only">Toggle menu</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;

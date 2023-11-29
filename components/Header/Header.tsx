import Image from "next/image";

export default function Header() {
	return (
		<>
			<Image priority width={172} height={98} alt="logo" src="/logo.svg" />
		</>
	);
}

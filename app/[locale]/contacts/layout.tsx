import Container from "@/components/Container/Container";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<Container>
			layout <br />
			{children} <br />
			layout
		</Container>
	);
}

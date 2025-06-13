import { Pokeball } from "@/components/icon/pokeball";
import { Button, Card, Container, Link, Text } from "@chakra-ui/react";

export default function Home() {
	return (
		<Container height="100vh" width="100vw" alignContent="center">
			<Container justifyItems="center">
				<Card.Root p={8}>
					<Card.Header >
						<Pokeball className="h-15" />
					</Card.Header>
					<Card.Body>
						<Text>Pokemon Gallery</Text>
						<Link href="/pokemon?page=1">
							<Button variant="outline" colorPalette="teal">
								View Pokemon
							</Button>
						</Link>
					</Card.Body>
				</Card.Root>
			</Container>
		</Container>
	);
}

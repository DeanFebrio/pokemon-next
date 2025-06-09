import { Pokeball } from "@/components/icon/pokeball";
import { Box, Button, Container, Link, Text } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box>
			<Container>
				<Pokeball className="h-15" />
				<Text>Pokemon Gallery</Text>
				<Link href="/pokemon">
					<Button variant="outline" colorPalette="teal">
						View Pokemon
					</Button>
				</Link>
			</Container>
		</Box>
	);
}

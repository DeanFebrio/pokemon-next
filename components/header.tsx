import { Container, Text } from "@chakra-ui/react";
import { Pokeball } from "./icon/pokeball";

export default function Header() {
	return (
		<Container as="header">
			<Pokeball className="size-10" />
            <Text>Pokemon Gallery</Text>
		</Container>
	);
}

import { PokemonDetail } from "@/types/pokemon";
import { Badge, Card, Stack, Text } from "@chakra-ui/react";

interface PokemonInfoProps {
	types: PokemonDetail["types"];
	abilities: PokemonDetail["abilities"];
}

export function PokemonInfo({ types, abilities }: PokemonInfoProps) {
	return (
		<Card.Root>
			<Card.Body>
				<Text textStyle="md">Types:</Text>
				<Stack direction="row">
					{types.map((type, index) => (
						<Badge key={index} colorPalette="green">
							{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
						</Badge>
					))}
				</Stack>
				<Text textStyle="md">Abilities:</Text>
				<Stack direction="row">
					{abilities.map((ability, index) => (
						<Badge key={index} colorPalette={ability.is_hidden ? "red" : "blue"}>
							{ability.ability.name.charAt(0).toUpperCase() +
								ability.ability.name.slice(1)}
						</Badge>
					))}
				</Stack>
			</Card.Body>
		</Card.Root>
	);
}

import { PokemonDetail } from "@/types/pokemon";
import { Badge, Card, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

interface PokemonInfoProps {
	types: PokemonDetail["types"];
	abilities: PokemonDetail["abilities"]
    height: PokemonDetail["height"];
    weight: PokemonDetail["weight"];
}

export function PokemonInfo({ types, abilities, height, weight }: PokemonInfoProps) {
	return (
		<Card.Root>
			<Card.Body>
				<Grid templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)"}} gap={4}>
					<GridItem>
						<Text>Height</Text>
                        <Text>{height}</Text>
						<Text>Weight</Text>
                        <Text>{weight}</Text>
					</GridItem>
					<GridItem>
						<Text textStyle="md">Types:</Text>
						<Stack direction="row">
							{types.map((type, index) => (
								<Badge key={index} colorPalette="green">
									{type.type.name.charAt(0).toUpperCase() +
										type.type.name.slice(1)}
								</Badge>
							))}
						</Stack>
						<Text textStyle="md">Abilities:</Text>
						<Stack direction="row">
							{abilities.map((ability, index) => (
								<Badge
									key={index}
									colorPalette={ability.is_hidden ? "red" : "blue"}
								>
									{ability.ability.name.charAt(0).toUpperCase() +
										ability.ability.name.slice(1)}
								</Badge>
							))}
						</Stack>
					</GridItem>
				</Grid>
			</Card.Body>
		</Card.Root>
	);
}

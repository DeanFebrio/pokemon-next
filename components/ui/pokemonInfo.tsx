import { PokemonDetail } from "@/types/pokemon";
import {
	Accordion,
	Badge,
	Card,
	Grid,
	GridItem,
	Span,
	Stack,
	Stat,
} from "@chakra-ui/react";

interface PokemonInfoProps {
	types: PokemonDetail["types"];
	abilities: PokemonDetail["abilities"];
	height: PokemonDetail["height"];
	weight: PokemonDetail["weight"];
}

export function PokemonInfo({
	types,
	abilities,
	height,
	weight,
}: PokemonInfoProps) {
	return (
		<Card.Root>
			<Card.Body>
				<Grid templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
					<GridItem>
						<Stat.Root>
							<Stat.Label>Height</Stat.Label>
							<Stat.ValueText alignItems="baseline">
								{height / 10} <Stat.ValueUnit>m</Stat.ValueUnit>{" "}
							</Stat.ValueText>
						</Stat.Root>
						<Stat.Root>
							<Stat.Label>Weight</Stat.Label>
							<Stat.ValueText alignItems="baseline">
								{weight / 10} <Stat.ValueUnit>kg</Stat.ValueUnit>
							</Stat.ValueText>
						</Stat.Root>
					</GridItem>
					<GridItem>
						<Accordion.Root multiple>
							<Accordion.Item value="abilities">
								<Accordion.ItemTrigger>
									<Span flex="1">Abilities</Span>
									<Accordion.ItemIndicator />
								</Accordion.ItemTrigger>
								<Accordion.ItemContent>
									<Stack direction="row">
										{abilities.map((ability, index) => (
											<Badge
												key={index}
												colorPalette={ability.is_hidden ? "red" : "blue"}
												marginBottom={2}
											>
												{ability.ability.name.charAt(0).toUpperCase() +
													ability.ability.name.slice(1)}
											</Badge>
										))}
									</Stack>
								</Accordion.ItemContent>
							</Accordion.Item>
							<Accordion.Item value="types">
								<Accordion.ItemTrigger>
									<Span flex="1">Types</Span>
									<Accordion.ItemIndicator />
								</Accordion.ItemTrigger>
								<Accordion.ItemContent>
									<Stack direction="row">
										{types.map((type, index) => (
											<Badge key={index} colorPalette="green" marginBottom={2}>
												{type.type.name.charAt(0).toUpperCase() +
													type.type.name.slice(1)}
											</Badge>
										))}
									</Stack>
								</Accordion.ItemContent>
							</Accordion.Item>
						</Accordion.Root>
					</GridItem>
				</Grid>
			</Card.Body>
		</Card.Root>
	);
}

import { PokemonList } from "@/types/pokemon";
import { Grid, GridItem } from "@chakra-ui/react";
import { PokemonCard } from "./pokemonCard";

interface PokemonGridProps {
	pokemons: PokemonList[];
}

export function PokemonGrid({ pokemons }: PokemonGridProps) {
	return (
		<Grid
			templateColumns={{
				base: "1fr",
				sm: "repeat(3, 1fr)",
				lg: "repeat(4, 1fr)",
			}}
			gap={{ base: 4, sm: 6, md: 8, lg: 10 }}
            padding={{ base: 4, sm: 6, md: 8, lg: 10 }}
		>
			{pokemons.map((pokemon) => (
				<GridItem key={pokemon.id}>
					<PokemonCard
						id={pokemon.id}
						name={pokemon.name}
						image={pokemon.image}
					/>
				</GridItem>
			))}
		</Grid>
	);
}

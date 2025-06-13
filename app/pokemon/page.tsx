import Header from "@/components/header";
import { PokemonGrid } from "@/components/ui/pokemonGrid";
import { PokemonPagination } from "@/components/ui/pokemonPagination";
import { getPokemonId, getPokemonImage, getPokemonList } from "@/lib/api";
import { PokemonList } from "@/types/pokemon";
import { Box } from "@chakra-ui/react";

interface PageProps {
	searchParams: { page?: string };
}

export default async function PokemonListPage({ searchParams }: PageProps) {
	const pageParam = Array.isArray(searchParams.page)
		? searchParams.page[0]
		: searchParams.page;

	const currentPage = parseInt(pageParam ?? "1", 10);
	const limit = 20;
	const offset = (currentPage - 1) * limit;

	const data = await getPokemonList(limit, offset);
	const totalPages = Math.ceil(data.count / limit);

	const pokemons: PokemonList[] = data.results.map((pokemon) => {
		const id = getPokemonId(pokemon.url);
		return {
			id,
			name: pokemon.name,
			url: pokemon.url,
			image: getPokemonImage(id),
		};
	});
	// console.log("Pokemons:", pokemons);

	return (
		<Box>
			<Header />
			<Box justifyItems="center" padding={5} paddingBottom={10}>
				<PokemonGrid pokemons={pokemons} />
				<PokemonPagination totalPages={totalPages} currentPage={currentPage} />
			</Box>
		</Box>
	);
}

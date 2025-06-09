import { PokemonDetail, PokemonListResponse } from "@/types/pokemon";

const BASE_API_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(
	limit = 20,
	offset = 0
): Promise<PokemonListResponse> {
	const response = await fetch(
		`${BASE_API_URL}/pokemon?limit=${limit}&offset=${offset}`
	);
	if (!response.ok) {
		throw new Error("Failed to Fetch Pokemon List");
	}

	return response.json();
}

export async function getPokemonDetail(id: number): Promise<PokemonDetail> {
	const response = await fetch(`${BASE_API_URL}/pokemon/${id}`);
	if (!response.ok) {
		throw new Error("Failed to Fetch Pokemon Detail");
	}
	return response.json();
}

export function getPokemonImage(id: number): string {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function getPokemonId(url: string): number {
	const number = url.match(/\/pokemon\/(\d+)\//);
	return number ? parseInt(number[1], 10) : 0;
}

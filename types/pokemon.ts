export interface PokemonList {
    id: number;
    name: string;
    url: string;
    image: string;
}

export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonList[];
}

export interface PokemonDetail {
	id: number;
	name: string;
	height: number;
	weight: number;
	sprites: {
		back_default: string | null;
		back_female: string | null;
		back_shiny: string | null;
		back_shiny_female: string | null;
		front_default: string | null;
		front_female: string | null;
		front_shiny: string | null;
		front_shiny_female: string | null;
		other: {
			"official-artwork": {
				front_default: string | null;
			};
		};
	};
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}[];
	stats: {
		base_stat: number;
		stat: {
			name: string;
		};
	}[];
	abilities: {
		ability: {
			name: string;
		};
		is_hidden: boolean;
		slot: number;
	}[];
}

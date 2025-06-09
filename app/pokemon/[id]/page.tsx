import { PokemonInfo } from "@/components/ui/pokemonInfo";
import { PokemonSprite } from "@/components/ui/pokemonSprite";
import { PokemonStats } from "@/components/ui/pokemonStats";
import { getPokemonDetail } from "@/lib/api";
import {
	Badge,
	Box,
	Button,
	Card,
	Container,
	Grid,
	GridItem,
	Image,
	Link,
	Stack,
} from "@chakra-ui/react";
import { Metadata } from "next";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

interface PageProps {
	params: {
		id: number;
	};
}

export async function generateMetaData({
	params,
}: PageProps): Promise<Metadata> {
	const pokemon = await getPokemonDetail(params.id);
	return {
		title: `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`,
		description: `Details about ${
			pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
		}`,
	};
}

export default async function PokemonDetailPage({ params }: PageProps) {
	const pokemon = await getPokemonDetail(params.id);
	const page = Math.ceil(pokemon.id / 20);
	return (
		<Box
			minHeight="100vh"
			maxHeight="100vh"
			maxWidth="100vw"
			alignContent="center"
			p={4}
		>
			<Link href={`/pokemon?page=${page}`} style={{ textDecoration: "none" }}>
				<Button size="xs" variant="ghost">
					<HiOutlineArrowCircleLeft />
					Back to Gallery
				</Button>
			</Link>
			<Container
				height="80%"
				width="100%"
				justifyItems="center"
				alignContent="center"
			>
				<Stack direction="row" spacing={8}>
					<Badge variant="surface" height="50px" fontSize="2xl" padding="10px">
						#{pokemon.id}
					</Badge>
					<Badge variant="surface" height="50px" fontSize="2xl" padding="10px">
						{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
					</Badge>
				</Stack>
				<Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={8} mt={8}>
					<GridItem>
						<Card.Root height="100%" width="100%">
							<Card.Body>
								<Stack direction="column" align="center">
									<Image
										src={
											pokemon.sprites.other["official-artwork"].front_default
										}
										alt={pokemon.name}
										boxSize={{ sm: "200px", md: "250px", lg: "300px" }}
										objectFit="contain"
									/>
									<PokemonSprite sprites={pokemon.sprites} />
								</Stack>
							</Card.Body>
						</Card.Root>
					</GridItem>
					<GridItem>
						<Stack direction="column" spacing={4}>
							<PokemonInfo
								types={pokemon.types}
								abilities={pokemon.abilities}
								height={pokemon.height}
								weight={pokemon.weight}
							/>
							<PokemonStats stats={pokemon.stats} />
						</Stack>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
}

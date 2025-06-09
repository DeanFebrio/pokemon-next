"use client";

import { Badge, Card, Image, Link, Stack } from "@chakra-ui/react";

interface PokemonCardProps {
	id: number;
	name: string;
	image: string;
}

export function PokemonCard({ id, name, image }: PokemonCardProps) {
	return (
		<Link href={`/pokemon/${id}`} textDecoration="none">
			<Card.Root cursor="pointer" variant="subtle">
				<Card.Body>
					<Stack align="center">
						<Image
							src={image}
							alt={name}
							boxSize={{ sm: "100px", md: "150px", lg: "200px" }}
							objectFit="contain"
						/>
						<Badge variant="outline" padding="5px">
							#{id}
						</Badge>
						<Badge variant="outline" padding="5px">
							{name.charAt(0).toUpperCase() + name.slice(1)}
						</Badge>
					</Stack>
				</Card.Body>
			</Card.Root>
		</Link>
	);
}

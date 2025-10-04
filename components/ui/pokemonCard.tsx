"use client";

import { Badge, Card, Image, Link, Skeleton, Stack } from "@chakra-ui/react";
import { useCallback, useState } from "react";

interface PokemonCardProps {
	id: number;
	name: string;
	image: string;
}

export function PokemonCard({ id, name, image }: PokemonCardProps) {
	const [isLoading, setLoading] = useState(true);

	const handleImageRef = useCallback((imgElement: HTMLImageElement | null) => {
		if (imgElement) {
			if (imgElement.complete && imgElement.naturalHeight !== 0) {
				setLoading(false);
			} else {
				const handleLoad = () => setLoading(false);
				const handleError = () => setLoading(false);

				imgElement.addEventListener("load", handleLoad, { once: true });
				imgElement.addEventListener("error", handleError, { once: true });
			}
			console.log("Image ref set:", imgElement.src);
		}
	}, []);

	return (
		<Link href={`/pokemon/${id}`} textDecoration="none">
			<Card.Root cursor="pointer" variant="subtle">
				<Card.Body>
					<Stack align="center">
						<Skeleton loading={isLoading} variant="shine">
							<Image
								ref={handleImageRef}
								src={image}
								alt={name}
								boxSize={{ sm: "100px", md: "150px", lg: "200px" }}
								objectFit="contain"
								_hover={{ transform: "scale(1.2)" }}
								transition="transform 0.3s ease-in-out"
								onLoad={() => setLoading(false)}
								onError={() => setLoading(false)}
							/>
						</Skeleton>
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

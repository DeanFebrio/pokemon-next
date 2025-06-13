import { PokemonDetail } from "@/types/pokemon";
import { Badge, Box, Card, Progress, Text } from "@chakra-ui/react";

interface PokemonStatsProps {
	stats: PokemonDetail["stats"];
}

export function PokemonStats({ stats }: PokemonStatsProps) {
	return (
		<Card.Root>
			<Card.Header>
				<Text textStyle="md">Stats</Text>
			</Card.Header>
			<Card.Body>
				<Box>
					{stats.map((stat) => (
						<Progress.Root
							max={200}
							value={stat.base_stat}
							key={stat.stat.name}
							mb={4}
							variant="subtle"
							size="xs"
						>
							<Progress.Label marginBottom={1}>
								<Text textStyle="sm" color="gray.300">
									{stat.stat.name.charAt(0).toUpperCase() +
										stat.stat.name.slice(1)}
									<Badge variant="outline" colorPalette="teal" marginStart={2}>{stat.base_stat}</Badge>
								</Text>
							</Progress.Label>
							<Progress.Track colorPalette="teal">
								<Progress.Range />
							</Progress.Track>
						</Progress.Root>
					))}
				</Box>
			</Card.Body>
		</Card.Root>
	);
}

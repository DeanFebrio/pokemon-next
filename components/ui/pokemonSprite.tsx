"use client";

import { PokemonDetail } from "@/types/pokemon";
import { Box, ButtonGroup, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

interface PokemonSpriteProps {
	sprites: PokemonDetail["sprites"];
}

export function PokemonSprite({ sprites }: PokemonSpriteProps) {
	const spriteArray = [
		{ label: "Front Default", src: sprites.front_default },
		{ label: "Front Female", src: sprites.front_female },
		{ label: "Front Shiny", src: sprites.front_shiny },
		{ label: "Front Shiny Female", src: sprites.front_shiny_female },
		{ label: "Back Default", src: sprites.back_default },
		{ label: "Back Female", src: sprites.back_female },
		{ label: "Back Shiny", src: sprites.back_shiny },
		{ label: "Back Shiny Female", src: sprites.back_shiny_female },
	].filter((x) => x.src !== null);
	// console.log(spriteArray);
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalSprites = spriteArray.length;

	const handleNext = () => {
		setCurrentIndex((index) => (index + 1) % totalSprites);
	};
	const handlePrev = () => {
		setCurrentIndex((index) => (index - 1 + totalSprites) % totalSprites);
	};

	return (
		<Box>
			<ButtonGroup variant="ghost" colorPalette="teal" size="sm" gap={0}>
				<IconButton onClick={handlePrev}>
					<HiOutlineChevronLeft />
				</IconButton>
				{totalSprites > 0 && (
					<Image src={spriteArray[currentIndex].src} height="110px" />
				)}
				<IconButton onClick={handleNext}>
					<HiOutlineChevronRight />
				</IconButton>
			</ButtonGroup>
		</Box>
	);
}

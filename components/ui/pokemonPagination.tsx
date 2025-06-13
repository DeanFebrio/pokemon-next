"use client";

import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PokemonPaginationProps {
	totalPages: number;
	currentPage: number;
}

export const PokemonPagination = ({
	totalPages,
	currentPage,
}: PokemonPaginationProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handlePageChange = (page: number) => {
		if (page < 1 || page > totalPages) return;
		const param = new URLSearchParams(searchParams.toString());
		console.log(param);
		param.set("page", page.toString());
		router.push(`/pokemon?${param.toString()}`);
	};

	return (
		<Pagination.Root count={totalPages} pageSize={1} defaultPage={currentPage}>
			<ButtonGroup variant="outline" colorPalette="teal" gap="4" size="sm">
				<Pagination.PrevTrigger asChild>
					<IconButton onClick={() => handlePageChange(currentPage - 1)}>
						<HiChevronLeft />
					</IconButton>
				</Pagination.PrevTrigger>
				<Pagination.PageText />
				<Pagination.NextTrigger asChild>
					<IconButton onClick={() => handlePageChange(currentPage + 1)}>
						<HiChevronRight />
					</IconButton>
				</Pagination.NextTrigger>
			</ButtonGroup>
		</Pagination.Root>
	);
};

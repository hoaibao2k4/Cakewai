import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function usePagination(data) {
    const itemsPerPage = 12;
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const [searchParams, setSearchParams] = useSearchParams();
    const queryPage = Math.max(parseInt(searchParams.get("page"), 10) || 1, 1);

    const [currentPage, setCurrentPage] = useState(
        maxPage === 0 ? 1 : Math.min(Math.max(queryPage, 1), maxPage)
    );
    const params = Object.fromEntries(searchParams.entries())['mode'];
    useEffect(() => {
        setCurrentPage(1)
    }, [params])
    // Đồng bộ hóa currentPage với query parameters
    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries()); // Lấy tất cả query params hiện có
        params.page = currentPage; // Cập nhật giá trị "page"
        setSearchParams(params); // Merge params
    }, [currentPage, searchParams, setSearchParams]);

    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    };

    const next = () => {
        setCurrentPage((prev) => Math.min(prev + 1, maxPage));
    };

    const previous = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const jump = (page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage((prev) => Math.min(pageNumber, maxPage));
    };

    return { currentPage, maxPage, currentData, next, previous, jump };
}

export default usePagination;

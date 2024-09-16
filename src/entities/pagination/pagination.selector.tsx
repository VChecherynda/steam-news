import { RootState } from "../../app/store";

const activePage = (state: RootState) => state.pagination.active;
const startPage = (state: RootState) => state.pagination.start;
const endPage = (state: RootState) => state.pagination.end;

export { activePage, startPage, endPage };

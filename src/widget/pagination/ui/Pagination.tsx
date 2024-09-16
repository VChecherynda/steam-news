import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  addActivePage,
  addEndPage,
  addStartPage,
} from "../../../entities/pagination/pagination.slice";
import {
  activePage,
  startPage,
} from "../../../entities/pagination/pagination.selector";

export function Pagination() {
  const dispatch = useDispatch();
  const active = useSelector(activePage);
  const prevPage = useSelector(startPage);

  return (
    <div className='flex items-center gap-4'>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={() => dispatch(addStartPage())}
        disabled={prevPage === 0}
      >
        <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Previous
      </Button>
      <div className='flex items-center gap-2'>
        {[...new Array(5)].map((_, index) => {
          return (
            <IconButton
              key={prevPage + index}
              variant={active === prevPage + index ? "filled" : "text"}
              color='gray'
              onClick={() => dispatch(addActivePage(prevPage + index))}
            >
              {prevPage + index + 1}
            </IconButton>
          );
        })}
      </div>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={() => dispatch(addEndPage())}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
      </Button>
    </div>
  );
}

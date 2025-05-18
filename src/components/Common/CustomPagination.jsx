import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const CustomPagination = ({ pagination, onPageChange }) => {
 const { current_page, last_page } = pagination;

 const pages = Array.from({ length: last_page }, (_, i) => i + 1);

 return (
  <Pagination className='mt-4'>
   <PaginationItem disabled={current_page === 1}>
    <PaginationLink first onClick={() => onPageChange(1)} />
   </PaginationItem>

   <PaginationItem disabled={current_page === 1}>
    <PaginationLink previous onClick={() => onPageChange(current_page - 1)} />
   </PaginationItem>

   {pages.map(page => (
    <PaginationItem key={page} active={page === current_page}>
     <PaginationLink onClick={() => onPageChange(page)}>{page}</PaginationLink>
    </PaginationItem>
   ))}

   <PaginationItem disabled={current_page === last_page}>
    <PaginationLink next onClick={() => onPageChange(current_page + 1)} />
   </PaginationItem>

   <PaginationItem disabled={current_page === last_page}>
    <PaginationLink last onClick={() => onPageChange(last_page)} />
   </PaginationItem>
  </Pagination>
 );
};

export default CustomPagination;

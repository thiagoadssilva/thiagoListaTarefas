import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

import {
  Container
} from './styled';

export default (props) => {
  
  function generateFirstItem() {
    return (
      <Pagination.First key="pagfirst" onClick={() => props.changePage(1)} disabled={props.pageCurrent === 1} />
    );
  }

  function generatePreviousItem() {
    return (
      <Pagination.Prev style={{marginRight: '20px'}} key="pagPrev" onClick={() => props.changePage(props.pageCurrent - 1)} disabled={props.pageCurrent === 1} />
    );
  }

  function generateNumericItem(page) {
    return (
      <Pagination.Item style={{marginRight: '5px'}} key={page} active={page === props.pageCurrent} onClick={() => props.changePage(page)}>
        {page}
      </Pagination.Item>
    );
  }

  function generateNextItem(numPages) {
    return (
      <Pagination.Next style={{marginLeft: '20px'}} key="pagNext" onClick={() => props.changePage(props.pageCurrent + 1)} disabled={props.pageCurrent === numPages} />
    );
  }

  function generateLastItem(numPages) {
    return (
      <Pagination.Last key="pagLast" onClick={() => props.changePage(numPages)} disabled={props.pageCurrent === numPages} />
    );
  }

  function getPagination() {
    console.log(props.totalItems);
    //console.log(props.itemsForPage);
    const numPage = Math.ceil(props.totalItems / props.itemsForPage);
    let items = [];

    items.push(generateFirstItem());
    items.push(generatePreviousItem());

    for (let page = 1; page <= numPage; page++) {
      items.push(generateNumericItem(page));
    }

    items.push(generateNextItem(numPage));
    items.push(generateLastItem(numPage));

    return items;
  }
  return (
    <Container>
      <Pagination size="lg">
        {getPagination()}
      </Pagination>
    </Container>
  );
}
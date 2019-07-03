import React from 'react'
import propTypes from 'prop-types'

import { Link } from 'gatsby'

import * as S from './styled'

const Pagination = props => (
  <S.PaginationWrapper>
    {!props.isFirst && (
      <Link to={props.prevPage} rel="prev">
        ← Previous Page
      </Link>
    )}
    <p>
      {props.currentPage} de {props.numPages}
    </p>
    {!props.isLast && (
      <Link to={props.nextPage} rel="next">
        Next Page →
      </Link>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string.isRequired,
  nextPage: propTypes.string.isRequired
}

export default Pagination
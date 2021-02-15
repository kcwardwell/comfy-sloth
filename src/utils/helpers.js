import React from 'react';
import { Link } from 'react-router-dom';
import { links } from './constants'

export const formatPrice = () => { }

export const getUniqueValues = () => { }

export const getLinks = (ulClass) => {
  return (
    <>
      <ul className={ulClass}>
        {links.map((link) => {
          const { id, text, url, } = link
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          )
        })}
        <li>
          <Link to="/checkout">checkout</Link>
        </li>
      </ul>
    </>
  )
}

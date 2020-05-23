import * as React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const CustomLink = ({ href, children, className, onClick, target }) => (
  <Link to={href} className={className} onClick={onClick} target={target}>
    {children}
  </Link>
);

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
};
export default CustomLink;

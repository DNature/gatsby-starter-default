import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const Image = ({ style, alt, src, className }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
            extension
            publicURL
          }
        }
      }
    }
  `);

  if (!data) return <img src={src} alt={alt} style={style} className={className} />;
  const image = data.images.edges.find(img => img.node.relativePath.includes(src) && img.node.extension != `svg`);

  if (!image) return null;

  return (
    <Img
      objectFit="cover"
      objectPosition="50% 50%"
      fluid={image.node.childImageSharp.fluid}
      alt={alt}
      style={style}
      className={className}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Image;

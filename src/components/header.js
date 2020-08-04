import React from "react"
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const { obito } = useStaticQuery(graphql`
  query {
    obito: file(relativePath: { eq: "obito2.jpg" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  return (
    <Container>
      <Content>
        <Img style={{ borderRadius: "50%" }} fixed={obito.childImageSharp.fixed} />
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <span>{'<'}</span>{siteTitle}<span>{'/>'}</span>
        </Link>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


const Container = styled.header`
  background: #1A1C21;
  border-bottom: 1px solid #FF5260;
  margin-bottom: 1.45rem;


`;

const Content = styled.div`
  padding: 1rem 0;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    margin-left: 1.2rem;
    color: #fff;
    font-weight: 500;
    font-size: 1.375rem;

    span {
      color: #FF5260;

    }
  }

  @media (max-width: 830px) {
    padding: 0 2rem;
  }

`;

export default Header

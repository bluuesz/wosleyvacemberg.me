import React from "react"
import styled from "styled-components"

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import Layout from "../components/layout"
import Image from "../components/meImage"
import Resume from "../components/resume"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Wosley Vacemberg" />

    <Container>
      <div>
        <Image />

        <Social>
          <a target="blank" href="https://github.com/bluuesz">
            <FaGithub size={25} />
          </a>
          <a target="blank" href="https://twitter.com/bluuu3s">
            <FaTwitter size={25} />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/wosley-vacemberg/"
          >
            <FaLinkedin size={25} />
          </a>
        </Social>
      </div>

      <Resume />
    </Container>
  </Layout>
)

const Container = styled.div`
  max-width: 680px;
  margin: 3.3125rem auto;

  display: flex;

  @media (max-width: 730px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Social = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #fff;
    transition: 0.3s color;

    &:hover {
      color: #ff5260;
    }
  }
`

export default IndexPage

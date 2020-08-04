import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Resume = () => {
  const { skillImage } = useStaticQuery(graphql`
    query {
      skillImage: allFile(filter: { relativeDirectory: { eq: "skills" } }) {
        edges {
          node {
            base
            childImageSharp {
              fixed(height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <div>
        <h1>Wosley Vacemberg</h1>
        <h4>Software developer</h4>
      </div>

      <MyResume>
        <p>
          Hi, I'm a software developer and a computer science student. I am also
          known more as bluuesz.
        </p>

        <p>
          I am an aspirant to the entire JavaScript ecosystem and passionate
          about functional programming and am currently looking to learn about
          the ocaml ecosystem.
        </p>

        <p>
          I am also looking for new opportunities related to software
          development, if you want to contact me, my networks are beside.
        </p>

        <i>
          In the future, this page will just be a personal section on my new
          blog =)
        </i>
      </MyResume>

      <Skills>
        <h1>Skills</h1>

        <GridSkill>
          {skillImage.edges.map(img => (
            <BoxSkill key={String(img.node.base)}>
              <Img fixed={img.node.childImageSharp.fixed} />
              <div>
                <h2>{img.node.base.replace(".png", "")}</h2>
              </div>
            </BoxSkill>
          ))}
        </GridSkill>
      </Skills>

      {/* <DownloadCV href="https://drive.google.com/file/d/1jMEXM5iwGmvSa0XGS1jMZHPiJCkDcY-z/view?usp=sharing" target="blank">
        Online CV
      </DownloadCV> */}
    </Container>
  )
}

const Container = styled.div`
  margin-left: 6.625rem;

  @media (max-width: 730px) {
    margin-left: 0;
  }

  div {
    h1 {
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
      text-decoration: underline;
      text-decoration-color: #ff5260;

      @media (max-width: 730px) {
        margin-top: 3rem;
        padding: 0 2rem;
      }
    }

    h4 {
      margin-top: 5px;
      color: #cac7c7;
      font-size: 1rem;
      font-weight: normal;
      @media (max-width: 730px) {
        padding: 0 2rem;
      }
    }

    p {
      margin-top: 5px;
      color: #cac7c7;
      font-size: 1rem;
    }
  }
`

const MyResume = styled.div`
  margin-top: 1.5rem;

  color: #dbdbdb;
  font-size: 1.125rem;
  line-height: 1.25rem;

  @media (max-width: 730px) {
    margin-left: 0;
    padding: 0 2rem;
  }

  i {
    display: block;
    margin-top: 0.75rem;
  }
`

const Skills = styled.div`
  margin-top: 2.375rem;
`

const GridSkill = styled.div`
  margin-top: 2.1875rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.125rem;

  @media (max-width: 730px) {
    grid-gap: 1rem;
    padding: 0 2rem;
  }
`

const BoxSkill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 130px;
  height: 120px;
  background: #30333a;
  border-radius: 4px;
  border: 1px solid #f4a3aa;
  transition: 0.2s border-color;

  @media (max-width: 730px) {
    width: 100px;
    heigth: 90px;
  }

  &:hover {
    border-color: #ff5260;
  }

  div {
    h2 {
      color: #fff;
      font-size: 1rem;
      position: relative;
      margin-top: 0.75rem;
    }
  }
`

const DownloadCV = styled.a`
  margin-top: 4.2rem;

  display: block;

  text-decoration: underline;
  text-decoration-color: #ff5260;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 4rem;

  @media (max-width: 730px) {
    margin-top: 3rem;
    padding: 0 2rem;
  }
`

export default Resume

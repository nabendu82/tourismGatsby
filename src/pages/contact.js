import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact"

export const query = graphql`
query {
    contactBcg: file(relativePath: {eq: "connectBcg.jpeg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`;

const contact = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.contactBcg.childImageSharp.fluid}>
            </StyledHero>
            <Contact />
        </Layout>
    )
}

export default contact

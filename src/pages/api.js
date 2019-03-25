import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const GatsbyQuery = graphql`
  {
    pokemonApi {
      poke1: pokemon(name: "haunter") {
        name
        image
        types
        classification
      }
      poke2: pokemon(name: "cubone") {
        name
        image
        types
        classification
      }
      poke3: pokemon(name: "gastly") {
        name
        image
        types
        classification
      }
    }
  }
`

class ClientFetchingExample extends Component {
  render() {
    const {
      pokemonApi: { poke1, poke2, poke3 },
    } = this.props.data
    return (
      <Layout>
        <div
          style={{ textAlign: "center", width: "auto", margin: "10px auto" }}
        >
          <h3 style={{ marginTop: `50px` }}>a demonstration of</h3>
          <h1>
            <a href="https://www.gatsbyjs.org/docs/client-data-fetching/">
              Client Data Fetching
            </a>
          </h1>
          <h3>using an external GraphQl database</h3>

          <h1
            style={{
              marginTop: `50px`,
            }}
          >
            {poke1.name}
          </h1>
          <p>{poke1.types} type</p>
          <div>
            <img
              src={poke1.image}
              alt={poke1.classification}
              style={{ width: 300 }}
            />
            <h2>{poke1.classification}</h2>
          </div>
          <br />
          <h1>{poke2.name}</h1>
          <p>{poke2.types} type</p>
          <div>
            <img
              src={poke2.image}
              alt={poke2.classification}
              style={{ width: 300 }}
            />
            <h2>{poke2.classification}</h2>
          </div>
          <br />
          <h1>{poke3.name}</h1>
          <p>{poke3.types} type</p>
          <div>
            <img
              src={poke3.image}
              alt={poke3.classification}
              style={{ width: 300 }}
            />
            <h2>{poke3.classification}</h2>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ClientFetchingExample

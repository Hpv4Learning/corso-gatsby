import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//Regola, va usato in un componente con la prima lettera maiuscola o in un custom hook
export const StaticQuery = () => {
  const {
    site: {
      siteMetadata: { title, otherCourses },
    },
  } = useStaticQuery(query)

  return (
    <div className="spacer">
      <h4>Scopri il nostro corso</h4>
      <b>{title}</b>
      <div className="spacer">
        <p> Altri corsi </p>
        <div className="spacer">
          <ul>
            {otherCourses.map(course => {
              return <li key={course.category}>{course.category}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        dummyData
        type {
          category
          level
          score
        }
        otherCourses {
          category
          level
          score
        }
      }
    }
    allSitePage {
      nodes {
        path
      }
    }
  }
`

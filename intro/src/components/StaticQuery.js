import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const StaticQuery = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <div className="spacer">
      <h4>Scopri il nostro corso</h4>
      <b>{data.site.siteMetadata.title}</b>
      <div className="spacer">
        <p> Altri corsi </p>
        <div className="spacer">
          <ul>
            {data.site.siteMetadata.otherCourses.map(course => {
              return <li key={course.category}>{course.category}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

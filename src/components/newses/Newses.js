import React, { Component } from 'react'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const ALL_NEWS = gql`
{
  newses{
    id
    topic
    description
    user {
      id
    }
  }
}
`

export class Newses extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_NEWS}>
          {({ loading, error, data }) => {
            if (loading) return <div>กำลังโหลดข่าว</div>
            if (error) return <div>ไม่พบข่าวที่กำลังค้นหา</div>

            return data.newses.map(news => (
              <div key={news.id}>
                {news.topic}
              </div>
              
            ))

          }}
        </Query>
        ----------------------
      </div>
    )
  }
}

export default Newses

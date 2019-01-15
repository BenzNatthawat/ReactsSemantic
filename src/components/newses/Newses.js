import React, { Component } from 'react'
import { Segment, Card } from 'semantic-ui-react'
import './Newses.css'

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
      <Segment style={{ padding: '2em 6em' }} vertical>
        <div>
          <Query query={ALL_NEWS}>
            {({ loading, error, data }) => {
              if (loading) return <div>กำลังโหลดข่าว</div>
              if (error) return <div>ไม่พบข่าวที่กำลังค้นหา</div>

              return data.newses.map(news => (
                <Card className="card_width"
                  color="red"
                  key={news.id}
                  link
                  header={news.topic}
                  meta={news.id}
                  description={news.description}
                />
              )
              )

            }}
          </Query>
        </div>
      </Segment>
    )
  }
}

export default Newses

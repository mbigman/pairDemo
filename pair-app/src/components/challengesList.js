/* iterates over and displays those challenges as links to each challenge's page */
import React from 'react'
import {Link} from 'react-router'
import {ListGroup, ListGroupItem} from 'react-bootstrap'


const ChallengesList = (props) => {
  return (
    <ListGroup>
      {props.challenges.map((challenge, i) => {
        return (
           <ListGroupItem key={i}>
             <Link to={`/rooms/${challenge.id}`}>
               {challenge.title}
             </Link>
           </ListGroupItem>
          )
      })}
    </ListGroup>
  )
}

export default ChallengesList;

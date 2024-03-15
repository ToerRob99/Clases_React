import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'robertoparra99',
    name: 'Roberto Parra',
    isFollowing: true
  },
  {
    userName: 'juangarcia',
    name: 'Juan Garcia',
    isFollowing: false
  },
  {
    userName: 'robertojaramillo',
    name: 'Roberto Jaramillo',
    isFollowing: true
  }
]

export function App () {
  return(
    <section className="App">
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return(
            <TwitterFollowCard
              key={userName}
              userName={userName}
              isFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}
import Flag from 'react-world-flags'
import dates from './dates'
import { v4 as uuidv4 } from 'uuid';

function App () {
  return (
    <div>
      <nav className="nav-bar">
        <div className={'nav-item'}>One</div>
        <div className={'nav-item'}>Two</div>
        <div className={'nav-item'}>Three</div>
      </nav>
      <main>
        <div className={'box'}>
          <ConcertList />
        </div>
      </main>
    </div>
  )
}

export default App

const ConcertList = () => {
  return (
    <ul>
      {dates.map(date => (
        <ConcertDate key={uuidv4()} date={date}/>
      ))}
    </ul>
  )
}

const ConcertDate = ({date}) => {
  return (
    <li>
      <span>
            <Flag code={date.country}/>
      </span>
      <span>Date: {date.date}</span>
    </li>
  )
}

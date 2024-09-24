import Flag from 'react-world-flags'
import dates from './dates'
import uuidv4 from 'uuid/v4'

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
        <ConcertDate key={uuid.v4()}/>
      ))}
    </ul>
  )
}

const ConcertDate = () => {
  return (
    <li>
      <Flag code={dates.country}/>
      {dates.date}
    </li>
  )
}

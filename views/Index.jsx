const React = require('react')

const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { logs } = this.props
    return (
      <Default title='Captains Log Index Page'>
        <h1>Captain's Log Index Page</h1>
        <nav>
          <a href='/logs/new'>Create a New Log, Cap'n</a>
        </nav>
        <ul>
          {
                        log.map((log) => {
                          const { name, entry, shipIsBroken, _id } = log
                          return (
                            <li key={_id}>
                              <a href={`/logs/${_id}`}>
                                {name}
                              </a> Entry{entry}

                              <br />
                              {
                                        shipIsBroken
                                          ? 'The Ship is broken'
                                          : 'The Ship is not broken'
                                    }
                              <br />
                              <form method='EDIT'>
                                <input type='submit' value={`Delete ${name}`} />
                                {/* </form><form method='POST' action={`/logs/${_id}?_method=DELETE`}> */}
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index

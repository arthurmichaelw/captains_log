const React = require('react')

const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { logs } = this.props
    return (
      <Default title='Captains Log Index Page'>
        <h1>Captain's Log Index Page</h1>
        <nav>
          <a href='/captiansLog/new'>Create a New Log, Cap'n</a>
        </nav>
        <ul>
          {
                        log.map((fruit) => {
                          const { name, entry, shipIsBroken, _id } = log
                          return (
                            <li key={_id}>
                              <a href={`/captainsLog/${_id}`}>
                                {name}
                              </a> Entry{entry}

                              <br />
                              {
                                        shipIsBroken
                                          ? 'The Ship is broken'
                                          : 'The Ship is not broken'
                                    }
                              <br />
                              <form method='POST' action={`/captiansLog/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${name}`} />
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

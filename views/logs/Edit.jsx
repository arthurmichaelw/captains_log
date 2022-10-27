const React = require('react')

const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, entry, shipIsBroken } = this.props.log
    return (
      <Default title={`${name} Edit Page`} log={this.props.log}>
        <form method='POST' action={`/logs/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Entry: <input type='textarea' name='entry' defaultValue={entry} /><br />
          This Ship is Broken: <input type='checkbox' name='shipIsBroken' defaultChecked={shipIsBroken} /> <br />
          <input type='submit' value='Edit Log' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit

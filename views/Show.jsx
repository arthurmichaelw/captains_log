const React = require('react')

const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, entry, shipIsBroken, _id } = this.props.log
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} log={this.props.log}>
        <p>{capName} /: {entry} and {shipIsBroken ? 'The Ship is Broken' : 'The Ship is Broken'}</p>
        <a href={`/captainsLog/Index`}></a>
      </Default>
    )
  }
}

module.exports = Show

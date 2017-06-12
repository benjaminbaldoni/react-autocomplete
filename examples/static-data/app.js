import React from 'react'
import DOM from 'react-dom'
import { getStates, matchStateToTerm, sortStates, styles } from '../../lib/utils'
import Autocomplete from '../../lib/index'

class App extends React.Component {
  state = { value: '', selection: {name: 'No selection'} }
  render() {
    return (
      <div>
        <h1>Basic Example with Static Data</h1>
        <p>
          When using static data, you use the client to sort and filter the items,
          so <code>Autocomplete</code> has methods baked in to help.
        </p>
        <span>Selection: {this.state.selection.name}</span>
        <label htmlFor="states-autocomplete">Choose a state from the US</label>
        <Autocomplete
          inputProps={{ id: 'states-autocomplete' }}
          items={getStates()}
          getItemValue={(item) => item.abbr}
          shouldItemRender={matchStateToTerm}
          sortItems={sortStates}
          onSelect={selection => this.setState({ selection })}
          renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlightedItem : styles.item}
              key={item.abbr}
            >{item.name}</div>
          )}
        />
      </div>
    )
  }
}

DOM.render(<App/>, document.getElementById('container'))

if (module.hot) { module.hot.accept() }

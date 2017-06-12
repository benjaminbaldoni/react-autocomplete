import React from 'react'
import DOM from 'react-dom'
import { getStates, matchStateToTerm, sortStates, styles } from '../../lib/utils'
import Autocomplete from '../../lib/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      value: '', 
      singleSelection: {name: 'No Selection'},
      multiSelection: [{name: 'No Selection'}], 
    }
  }

  render() {
    return (
      <div style={{display:'flex'}}>
        <div style={{width:'50%'}}>
          <h1>Single Select</h1>

          <div>
            Selection: {this.state.singleSelection.name}
          </div>

          <br/>

          <Autocomplete
            inputProps={{ id: 'states-autocomplete' }}
            items={getStates()}
            itemsKey='abbr'
            getItemValue={(item) => item.abbr}
            shouldItemRender={matchStateToTerm}
            sortItems={sortStates}
            onSelect={item => this.setState({ singleSelection: item })}
            buttonComponent={<div>Button</div>}
            renderItem={item => (
              <div key={item.abbr}>{item.name}</div>
            )}            
          />
        </div>

        <div style={{width:'50%'}}>
          <h1>Multi Select</h1>

          <div>
            Selection: {this.state.multiSelection.map(item => item.name)}
          </div>

          <br/>

          <Autocomplete
            inputProps={{ id: 'states-autocomplete' }}
            items={getStates()}
            itemsKey='abbr'
            getItemValue={(item) => item.abbr}
            shouldItemRender={matchStateToTerm}
            sortItems={sortStates}
            onSelect={(item, selection) => this.setState({ multiSelection: selection })}
            buttonComponent={<div>Button</div>}
            renderItem={item => (
              <div key={item.abbr}>{item.name}</div>
            )}
            multiple
          />
        </div>
      </div>
    )
  }
}

DOM.render(<App/>, document.getElementById('container'))

if (module.hot) { module.hot.accept() }

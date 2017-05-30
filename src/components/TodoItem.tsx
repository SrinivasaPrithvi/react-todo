import * as React from 'react';
import {List, Map} from 'immutable';
import {Checkbox, ListItem, RaisedButton, TextField} from 'material-ui';

interface Props {
  text: string;
}

class TodoList extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText={this.props.text}
        style={{fontFamily: 'Roboto'}}
      >
        <RaisedButton label="Destroy" primary={true} />
        <TextField hintText={this.props.text}/>
      </ListItem>
    );
  }
}

export default TodoList;

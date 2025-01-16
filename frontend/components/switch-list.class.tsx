import React from '../lib/react.js';
import Switch from '../components/switch.tsx';

interface Props {}

interface State {
  switches: {
    id: string;
    active: boolean;
    children: string;
  }[];
}

class SwitchListClass extends React.Component<Props, State> {
  // state: State;
  setState: (nextState: Partial<State>) => void;

  // constructor(props: Props) {
  //   super(props);

  //   this.handleClickMethod = this.handleClickMethod.bind(this);
  // }

  state: State = {
    switches: [
      {
        id: 'likelion-12',
        active: false,
        children: '멋사 Front-End 스쿨 12기',
      },
      {
        id: 'likelion-8',
        active: true,
        children: '멋사 Front-End 스쿨 8기',
      },
    ],
  };

  render() {
    return (
      <ul className="SwitchList" style={switchStyles}>
        {this.state.switches.map(({ id, active, children }) => (
          <li key={id}>
            <Switch active={active} onToggle={() => this.handleToggleState(id)}>
              {children}
            </Switch>
            <button type="button" onClick={this.handleClickMethod}>
              button in class component
            </button>
          </li>
        ))}
      </ul>
    );
  }

  handleClickMethod = () => {
    console.log('clicked button');
    console.log(this); // this.setState()
  };

  handleToggleState(id: string): void {
    const nextSwitches = this.state.switches.map((item) => {
      return item.id === id ? { ...item, active: !item.active } : item;
    });

    this.setState({
      switches: nextSwitches,
    });
  }
}

export default SwitchListClass;

const switchStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  listStyle: 'none',
  paddingInlineStart: 0,
};

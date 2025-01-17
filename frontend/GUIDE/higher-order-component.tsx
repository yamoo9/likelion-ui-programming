import React from '../lib/react.js';

// 컴포넌트 간 로직 공유를 위해 고차 컴포넌트를 작성합니다.

interface Props {
  children?: React.ReactNode;
}

interface State {
  email: string;
  password: string;
}

// 컴포넌트 -> 고차 함수 => 고차 컴포넌트
export default function withFormState(Component: React.Component) {
  // 고차(향상된, 로직을 공유하는 추상적인 레이어를 생성하는) 컴포넌트 반환
  return class HigherOrderComponent extends React.Component {
    props: Props;

    state: State = {
      email: '',
      password: '',
    };

    setState: (nextState: Partial<State>) => void;

    render() {
      return (
        <Component
          formState={this.state}
          onChange={this.handleChange}
          onUpdate={this.handleUpdateFormData}
          {...this.props}
        />
      );
    }

    handleChange = (e: React.ReactInputEvent) => {
      const stateName = e.target.name;

      this.setState({
        [stateName]: e.target.value.trim(),
      });
    };

    handleUpdateFormData = (e: Event) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      console.log(formData.get('email'));
    };
  };
}

import React from '../lib/react.js';
import withFormState from './higher-order-component.tsx';

/* -------------------------------------------------------------------------- */
/* Render Props & Higher-Order Component                                      */
/* -------------------------------------------------------------------------- */

export default function RenderPropsAndHOC() {
  return (
    <div className="RenderPropsAndHOC">
      <HOC1
        render={(dateInfo: DateInfo) => (
          <ReactFunctionComponent dateInfo={dateInfo} />
        )}
      />
      <HOC2 />
    </div>
  );
}

// 클래스 컴포넌트 --------------------------------------------------------------------

class ReactClassComponent extends React.Component {
  props: {
    render?: (dateInfo: DateInfo) => React.ReactElement;
    onUpdate: () => void;
    onChange: (e: React.ReactInputEvent) => void;
    formState: {
      email: string;
      password: string;
    };
  };

  setState: (nextState: Partial<State>) => void;

  render() {
    const dateInfo = getDateInfo();
    const { formState, onChange, render, onUpdate } = this.props;

    console.log(formState);

    return (
      <section>
        <h2>React 규칙 준수</h2>
        {render?.(dateInfo)}
        <form onSubmit={onUpdate} style={formStyles}>
          <div style={formControlStyles}>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user@company.io"
              value={formState.email}
              onChange={(e: React.ReactInputEvent) => onChange(e)}
            />
          </div>
          <div style={formControlStyles}>
            <label htmlFor="password">패스워드</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="영어, 숫자 조합 6자리 이상"
              value={formState.password}
              onChange={(e: React.ReactInputEvent) => onChange(e)}
            />
          </div>
          <button type="submit">제출</button>
        </form>
      </section>
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
}

const HOC1 = withFormState(ReactClassComponent);

/* -------------------------------------------------------------------------- */

interface Props {
  children: React.ReactNode;
  onUpdate: () => void;
  onChange: (e: React.ReactInputEvent) => void;
  formState: {
    email: string;
    password: string;
  };
}

interface State {
  email: string;
  password: string;
}

class AnotherReactClassComponent extends React.Component {
  props: Props;

  render() {
    const { children, formState, onUpdate, onChange } = this.props;

    return (
      <section>
        <h2>고차 컴포넌트를 사용해 컴포넌트 간 로직 공유</h2>
        <form onSubmit={onUpdate} style={formStyles}>
          <div style={formControlStyles}>
            <label htmlFor="hoc-email">이메일</label>
            <input
              type="email"
              name="email"
              id="hoc-email"
              placeholder="user@company.io"
              value={formState.email}
              onChange={(e: React.ReactInputEvent) => onChange(e)}
            />
          </div>
          <div style={formControlStyles}>
            <label htmlFor="hoc-password">패스워드</label>
            <input
              type="password"
              name="password"
              id="hoc-password"
              placeholder="영어, 숫자 조합 6자리 이상"
              value={formState.password}
              onChange={(e: React.ReactInputEvent) => onChange(e)}
            />
          </div>
          <button type="submit">제출</button>
        </form>
        {children}
      </section>
    );
  }
}

// 고차 컴포넌트 = withFormState 고차 함수 실행 결과
const HOC2 = withFormState(AnotherReactClassComponent);

const formStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 8,
};

const formControlStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
};

// 함수 컴포넌트 --------------------------------------------------------------------

function ReactFunctionComponent({ dateInfo }: { dateInfo: DateInfo }) {
  return (
    <>
      <p>규칙을 준수하지 않으면 앱에 문제가 발생합니다.</p>
      <footer>
        {dateInfo && <time dateTime={dateInfo.iso}>{dateInfo.ko}</time>}
      </footer>
    </>
  );
}

// 일반 함수 -----------------------------------------------------------------------

function getDateInfo(): DateInfo {
  const d = new Date();
  const [year, month, date] = d.toLocaleDateString().split('.');
  return {
    iso: d.toISOString(),
    ko: `${year}년 ${month.trim()}월 ${date.trim()}일`,
  };
}

interface DateInfo {
  iso: string;
  ko: string;
}

import React from '../lib/react.js';

/* -------------------------------------------------------------------------- */
/* Render Props & Higher-Order Component                                      */
/* -------------------------------------------------------------------------- */

export default function RenderPropsAndHOC() {
  return (
    <div className="RenderPropsAndHOC">
      <ReactClassComponent
        render={(dateInfo: DateInfo) => {
          // 렌더링 (JSX: React Element 반환)
          return <ReactFunctionComponent dateInfo={dateInfo} />;
        }}
      />
      <AnotherReactClassComponent />
    </div>
  );
}

// 클래스 컴포넌트 --------------------------------------------------------------------

class ReactClassComponent extends React.Component {
  props: {
    render?: (dateInfo: DateInfo) => React.ReactElement;
    rules?: string[];
    getRule?: (id: number) => { id: number; content: string }[];
  };

  render() {
    const dateInfo = getDateInfo();

    // render props 패턴을 사용해 dateInfo 정보를 children 컴포넌트에 전달하세요.
    return (
      <section>
        <h2>React 규칙 준수</h2>
        {this.props.render?.(dateInfo)}
      </section>
    );
  }
}

class AnotherReactClassComponent extends React.Component {
  props: {
    children?: React.ReactNode;
  };

  render() {
    const { children } = this.props;

    return (
      <section>
        <h2>고차 컴포넌트를 사용해 컴포넌트 간 로직 공유</h2>
        {children}
      </section>
    );
  }
}

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

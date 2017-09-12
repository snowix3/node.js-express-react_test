var ReactDOM = require('react-dom');

// Reactコンポーネントクラス「Timer」を宣言
class Timer extends React.Component {
  constructor(props) {                                  // （4）
    super(props);
    this.state = {remaining : this.props.seconds};      // （2）
  }

  // state.remainingが正の数なら1秒減じる関数
  countDown() {
      if(this.state.remaining > 0) {
            this.setState((prevState) => ({
                  remaining : prevState.remaining - 1       // （3）
            }));
       }
  }

  // 初期化時に、countDownメソッドを1秒ごとに呼び出すタイマーを設定
  componentDidMount() {                                  // （5）
    this.interval = setInterval(() => this.countDown(), 1000);
  }

  // 終了処理として、タイマーをクリアする
  componentWillUnmount() {                              // （6）
    clearInterval(this.interval);
  }

  // Timerコンポーネントが描画する要素を記述
  render() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Hello, ", this.props.name, "!"), 
        React.createElement("h2", null, this.state.remaining, " seconds remaining.")
      )
    );
  }
}

// Propsを通してnameとsecondsを渡して、Timerコンポーネントを生成
const element = React.createElement(Timer, {name: "Filange", seconds: 180});   // （1）


module.exports = element;
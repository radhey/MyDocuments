/*
Both React.useMemo and React.useCallback receives a function as its first argument and a dependencies array as the second one. 
The hook will return a new value only when one of the dependencies value changes (referential equality). 
The main difference is that React.useMemo will call the fooFunction and return its result while React.useCallback will return 
the fooFunction without calling it. 
*/
const App = () => {
  const fooFunction = () => {
    return "Foo is just Food without D";
  };

  const useMemoResult = React.useMemo(fooFunction, []);
  const useCallbackResult = React.useCallback(fooFunction, []);

  console.log("useMemoResult: ", useMemoResult); //output: useMemoResult: Foo is just Food without D
  console.log("useCallbackResult: ", useCallbackResult); //output: useCallbackResult: function fooFunction(){}

  return <p>Foo is just food without D</p>;
};


/*
If you are familiar with React.PureComponent then React.memo is quite straightforward as it is exactly similar 
to React.PureComponent. We use React.PureComponent with class component while React.memo works with functional components
*/
const App = () => {
    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)

    const increaseCounter1 = () => {
        setCount1(count1 => count1 + 1)
    }

    return (
        <>
            <button onClick={increaseCounter1}>Increase counter 1</button>
            <Counter value={count1}>Counter 1</Counter>
            <Counter value={count2}>Coutner 2</Counter>
        </>
    )
}
/*
Every time the user clicks on the button, the state of count1 changes causing the App to rerender both counters which is known 
as unnecessary re-render. However, we expect only the counter1 to be rerendered since nothing has changed with the counter2. 
In reality, both counters get rerendered.

How can we address this issue? 🤔 Well, React.memo is our answer. 
All we need to do is to wrap our Counter component within React.memo
*/
const Counter = ({value, children}) => {
    console.log('Render: ', children)

    return (
        <div>
            {children}: {value}
        </div>
    )
}

export default Counter
// Above Counter component replace with memo counter component for preventing rendering
const Counter = ({value, children}) => {
    console.log('Render: ', children)

    return (
        <div>
            {children}: {value}
        </div>
    )
}
export default React.memo(Counter)
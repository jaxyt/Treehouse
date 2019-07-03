const title = 'First React Element!';

const desc = 'I just learned how to create a react node and render it to the dom';
const myTitleId = 'main-title';
const name = 'Jax'

const header = (
<header>
    {/* this is a comment in JSX*/}
    <h1 id={myTitleId}>{name}'s {title}</h1>
    <p className="main-class">{desc}</p>
</header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);
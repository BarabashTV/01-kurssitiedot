const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.part1}: {props.exercises1}
      </p>
      <p>
        {props.part2}: {props.exercises2}
      </p>
      <p>
        {props.part3}: {props.exercises3}
      </p>
    </>
  );
};

const Total = (props) => {
  console.log(props);
  return <p>Number of exercises: {props.exercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const exercises = exercises1 + exercises2 + exercises3;

  const courseParts = [
    {
      part: "Fundamentals of React",
      exercises: 10,
    },
    {
      part: "Using props to pass data",
      exercises: 7,
    },
    {
      part: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <hr />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <hr />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;

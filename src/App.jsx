import Header from "./Header";
import Content from "./Content";
import Part from "./Part";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  /*const parts = [
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
  ]; */

  return (
    <div>
      <Header course={course} />
      <hr />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises1}
        part3={part3}
        exercises3={exercises3}
      />
      <hr />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;

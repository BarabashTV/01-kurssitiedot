import Part from "./Part";

const Content = (props) => {
  return (
    <ul>
      <li>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      </li>
      <li>
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      </li>
      <li>
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      </li>
    </ul>
  );
};

export default Content;

interface Props {
  text: string;
  onSort: () => void;
}

function Button({ text, onSort }: Props) {
  return <button onClick={onSort}>{text}</button>;
}
export default Button;

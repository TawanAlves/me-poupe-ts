import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};

const InputArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2022, 9, 27),
      category: "food",
      title: "Item de teste",
      value: 250.25,
    };
    onAdd(newItem);
  };

  return (
    <C.Container>
      <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
    </C.Container>
  );
};

export default InputArea;

import PaginationComponent from "react-bootstrap/Pagination";
import { getArrayOfNumbers } from "../../helpers/getArrayOfNumbers";


export function Pagination({ start, end, active, onClick }) {
  return (
    <PaginationComponent>
      {getArrayOfNumbers(start, end).map((number) => (
        <PaginationComponent.Item
          key={number}
          active={number === active}
          onClick={() => onClick(number)}
        >
          {number}
        </PaginationComponent.Item>
      ))}
    </PaginationComponent>
  );
}

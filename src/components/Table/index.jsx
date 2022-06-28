import { Link } from "react-router-dom";
import dataTableFormat from "../../helpers/dataTableFormat";

function Table(props) {
  const { columns, data, setSelected, setModalState, path } = props;
  if (data === undefined || data.length === 0 || data === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table className="w-full whitespace-nowrap table-auto">
          <thead>
            <tr className="h-16 w-full text-sm leading-relaxed text-gray-800">
              {columns.map((item, index) => (
                <th key={index} className="font-bold text-left pl-4">
                  {item.name}
                </th>
              ))}
              {!path ? "" : <th className="font-bold text-center">Ações</th>}
            </tr>
          </thead>
          <tbody className="w-full">
            {data?.map((item, index) => (
              <tr
                key={index}
                className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
              >
                {columns.map((column, index) => (
                  <td key={index} className="px-2 cursor-pointer w-1">
                    {column.selector === "imageUrl" && (
                      <div className="flex items-center">
                        <div className="w-10 h-10">
                          <img
                            className="w-full h-full"
                            src={item.imageUrl || "/assets/no-image.jpg"}
                            alt="imagem"
                          />
                        </div>
                      </div>
                    )}
                    <p className="font-medium">
                      {column.selector !== "imageUrl" &&
                        dataTableFormat(column.selector, item[column.selector])}
                    </p>
                  </td>
                ))}
                <td className="w-2 text-center">
                  {props.upload && (
                    <button
                      className="focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none border rounded py-4 px-3 px-4 bg-primary"
                      onClick={() => {
                        setSelected(item);
                        setModalState(true);
                      }}
                    >
                      Upload
                    </button>
                  )}

                  {!path ? (
                    ""
                  ) : (
                    <>
                      <Link to={`editar/${item.id}`}>
                        <button className="focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none border rounded py-4 px-3 px-4 bg-primary">
                          Editar
                        </button>
                      </Link>
                      <button className="focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none border rounded py-4 px-3 px-4 bg-red">
                        Excluir
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;

import { Link } from "react-router-dom";
import { fDate } from "../../helpers/dateConvertEpochToHuman";
import { useModalWithData } from "../../helpers/modalHooks";
import Modal from "./modal";

const CouponsUsed = (props) => {
  const { modalOpen, selected, setSelected, setModalState } =
    useModalWithData();
  const { columns, data, modalTitle, components } = props;

  console.log(props);
  return (
    <>
      <Modal
        title="Dados Cupom"
        isActive={modalOpen}
        handleClose={() => setModalState(false)}
        body={components}
        data={selected}
        path={props.pathApi}
      >
        {props.children}
      </Modal>

      <div className="w-full">
        <div className="bg-white py-4 md:py-7 ">
          {/* <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
                <a href="javascript:void(0)">
                  <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                    <p>All</p>
                  </div>
                </a>
                <a href="javascript:void(0)">
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                    <p>Done</p>
                  </div>
                </a>
                <a href="javascript:void(0)">
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                    <p>Pending</p>
                  </div>
                </a>
              </div>
            </div> */}

          <div className="mt-7  w-full">
            <table className="w-full whitespace-nowrap">
              <tbody>
                {data &&
                  data.map((item) => {
                    const title = item.coupon.title;
                    return (
                      <tr className="h-16 border border-gray-100 rounded">
                        <td className>
                          <div className="flex items-center pl-5">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2">
                              <abbr class="initialism" title={title}>
                                {title.substr(0, 30)} {"..."}
                              </abbr>
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                                stroke="#3B82F6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                                stroke="#3B82F6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </td>
                        <td className="pl-24">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              width={20}
                              height={20}
                              fill="none"
                              stroke="#52525B"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              />
                            </svg>
                            <p className="text-sm leading-none text-gray-600 ml-2">
                              {item.store.name}
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#52525B"
                              stroke-width="2"
                              width={20}
                              height={20}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="text-sm leading-none text-gray-600 ml-2 text-center">
                              <small>Cupom valido até</small> <br />
                              {fDate(item.expire_at)}
                            </p>
                          </div>
                        </td>

                        {/* <td className="pl-5">
                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-500 bg-red-100 hover:bg-red-200 rounded">
                              {item.date_of_use}
                            </button>
                          </td> */}
                        <td className="pl-4">
                          <button
                            onClick={() => {
                              setSelected(item);
                              setModalState(true);
                            }}
                            className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                          >
                            Detalhes
                          </button>
                        </td>
                        <td className="pl-1">
                          <Link
                            to={`/cupom/${item?.coupon.id}`}
                            target="_blank"
                          >
                            <button className="text-sm leading-none text-gray-600 p-3 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}

                <tr className="h-3" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponsUsed;

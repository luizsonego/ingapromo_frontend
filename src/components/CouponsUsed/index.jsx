import { Link } from 'react-router-dom'
import { fDate } from '../../helpers/dateConvertEpochToHuman'
import { useModalWithData } from '../../helpers/modalHooks'
import Modal from './modal'

const CouponsUsed = (props) => {
  const { modalOpen, selected, setSelected, setModalState } = useModalWithData()
  const { columns, data, modalTitle, components } = props

  console.log(props)
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
                    const title = item.coupon.title
                    return (
                      <tr className="h-16 border border-gray-100 rounded">
                        <td className>
                          <div className="flex items-center pl-5">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2">
                              <abbr class="initialism" title={title}>
                                {title.substr(0, 30)} {'...'}
                              </abbr>
                            </p>
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
                              setSelected(item)
                              setModalState(true)
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
                    )
                  })}

                <tr className="h-3" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default CouponsUsed

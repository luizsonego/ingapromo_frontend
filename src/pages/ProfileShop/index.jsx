import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
const classIcon = "mr-2 h-4 w-4 fill-gray-500/80";
const ProfileShop = () => {
  const params = useParams();
  const { data, isLoading } = useQuery("loja", () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/store/shop?id=${params.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data.data;
      })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto pt-12 bg-white">
      <div className="flex flex-row rounded-lg border border-gray-200/80 bg-white p-6 mx-5">
        <div className="relative">
          {!data.imageThumbnailUrl ? (
            <img
              className="w-40 h-40 rounded-md object-cover"
              src="/assets/no-image.jpg"
              alt="User"
            />
          ) : (
            <img
              className="w-40 h-40 rounded-md object-cover"
              src={data.imageThumbnailUrl}
              alt="User"
            />
          )}
          {/* <div
            className="absolute -right-3 bottom-5 h-5 w-5 sm:top-2 rounded-full border-4 border-white bg-green-400 sm:invisible md:visible"
            title="User is online"
          ></div> */}
        </div>

        <div className="flex flex-col px-6">
          <div className="flex h-8 flex-row">
            <h2 className="text-lg font-semibold">{data.name}</h2>

            {/* <svg
              className="my-auto ml-2 h-5 fill-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
            </svg> */}
          </div>

          <div className="my-2 flex flex-row space-x-2">
            <div className="flex flex-row">
              <div className="text-xs text-gray-400/80 hover:text-gray-400">
                {data.category}
              </div>
            </div>

            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classIcon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-xs text-gray-400/80 hover:text-gray-400">
                {data.address}
              </div>
            </div>

            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class={classIcon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div className="text-xs text-gray-400/80 hover:text-gray-400">
                {data.email}
              </div>
            </div>

            <div className="flex flex-row">
              <svg
                className={classIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="24"
                height="24"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>

              <div className="text-xs text-gray-400/80 hover:text-gray-400">
                {data.whatsapp}
              </div>
            </div>

            <div className="flex flex-row">
              <svg
                className={classIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="24"
                height="24"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <div className="text-xs text-gray-400/80 hover:text-gray-400">
                {data.instagram}
              </div>
            </div>
          </div>

          <div className="mt-2 flex flex-row items-center space-x-5">
            <span
              href="#"
              className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
            >
              <div className="flex flex-row items-center justify-center">
                <svg
                  className="mr-3 fill-gray-500/95"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
                </svg>

                <span className="font-bold text-gray-600">
                  {" "}
                  {data.coupon.length}{" "}
                </span>
              </div>

              <div className="mt-2 text-sm text-gray-400">
                Cupons cadastrados
              </div>
            </span>
          </div>
        </div>

        {/* <div className="w-100 flex flex-grow flex-col items-end justify-start">
          <div className="flex flex-row space-x-3">
            <button className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600">
              <svg
                className="mr-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
              </svg>
              Follow
            </button>

            <button
              className="flex rounded-md bg-gray-100 py-2 px-1 text-white 
        transition-all duration-150 ease-in-out hover:bg-gray-200"
            >
              <svg
                className="fill-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
              </svg>
            </button>
          </div>
        </div> */}
      </div>

      {data?.coupon.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </main>
  );
};

export default ProfileShop;

import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline'
import axios from 'axios'
import { Fragment } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]

const NavigationCategory = () => {
  const { data: categoriesData } = useQuery('categories-navbar', async () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/category?per-page=7`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return res.data.data
      }),
  )

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm sm:hidden md:block">
      <Popover className="sticky top-0 bg-white py-3 flex justify-between">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {categoriesData?.map((cat, index) =>
              cat > 0 ? (
                <Link
                  key={index}
                  to={`categoria/${cat.slug}`}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                  title=""
                >
                  {cat.name}
                </Link>
              ) : (
                <></>
              ),
            )}
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    to="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </Link>

                  <Link
                    to="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </Link>
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <Link
                    to="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <Link
                      to="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default NavigationCategory

import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const RightSideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <h1 className="text-2xl font-semibold">Create Post</h1>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 my-2"
                          >
                            Title
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="block border outline-none p-2 w-full my-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter Title"
                            />
                          </div>
                        </div>
                        <div className="my-4">
                          <label
                            htmlFor="comment"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Add post description
                          </label>
                          <div className="mt-1">
                            <textarea
                              rows={4}
                              name="Description"
                              placeholder="Description"
                              className="block w-full outline-none p-2 border border-gray-300 shadow-sm sm:text-sm"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 my-2"
                          >
                            Category
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="email"
                              className="block border outline-none p-2 w-full my-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter Category"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default RightSideBar;

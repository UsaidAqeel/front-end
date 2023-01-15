import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createPosts, getPost } from "../../services/index.service";
import { BounceLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const RightSideBar = ({ getval, setVal, setArray }) => {
  const [open, setOpen] = useState(false);
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setOpen(setVal);
  }, [setVal]);

   
  const handleClose = () => {
    getval(false);
    setOpen(false);
  };

  const createPostSchema = yup.object().shape({
    title: yup.string().required(),
    Description: yup.string().required(),
    name: yup.string().required(),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createPostSchema) });

  const handleCreatePost = async (data) => {
    const { Description, title, name } = data;
    const obj = {
      postTitle: title,
      postDes: Description,
      userName: name,
    };
    setloader(true);
    const res = await createPosts(obj);
    if (!res.error) {
      setloader(false);
      setOpen(false);
      getval(false);
      const Get = await getPost();
      if (!Get.error) {
        console.log(Get);
        setArray(Get.data.data.data);
      }
    } else {
      toast.error("something is wrong");
    }
  };

  return (
    <>
      {loader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 !z-50 bg-opacity-25 flex justify-center items-center bg-white w-100 h-screen backdrop-blur-md">
          <BounceLoader size={40} />
        </div>
      )}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative" onClose={handleClose}>
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

          <div className={`fixed inset-0 overflow-hidden ${loader && '-z-10'}`}>
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
                    <div className="flex relative h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <h1 className="text-2xl font-semibold">Create Post</h1>
                        <form onSubmit={handleSubmit(handleCreatePost)}>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 my-2"
                            >
                              Title
                            </label>
                            <div className="mt-1">
                              <input
                                {...register("title")}
                                type="text"
                                className="block border outline-none p-2 w-full my-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter Title"
                              />
                            </div>
                            {errors.title && (
                              <p className="text-red-700 text-sm">
                                {errors.title.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 my-2"
                            >
                              Name
                            </label>
                            <div className="mt-1">
                              <input
                                {...register("name")}
                                type="text"
                                className="block border outline-none p-2 w-full my-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter name"
                              />
                            </div>
                            {errors.name && (
                              <p className="text-red-700 text-sm">
                                {errors.name.message}
                              </p>
                            )}
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
                                {...register("Description")}
                                rows={4}
                                placeholder="Description"
                                className="block w-full outline-none p-2 border border-gray-300 shadow-sm sm:text-sm"
                              />
                            </div>
                            {errors.Description && (
                              <p className="text-red-700 text-sm">
                                {errors.Description.message}
                              </p>
                            )}
                          </div>
                          <div className="absolute bottom-0 py-3 right-0 pr-2">
                            <button
                              type="submit"
                              className="py-3 px-4 text-sm bg-indigo-500 text-white "
                            >
                              Create Post
                            </button>
                          </div>
                        </form>
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

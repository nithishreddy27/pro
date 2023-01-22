import React,{ useState } from "react";
import { useRouter } from "next/router";

export default function addDetails() {
  const router = useRouter();
  const {
    query: { email },
  } = router;
  const props = {
    email,
  };
  const [position, setPosition] = useState("student");

  return (
    <>
      <img
        className="absolute h-[1000px]"
        src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
        alt=""
      />
      <main className="z-30 relative p-16">
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="bg-white pt-1 pb-8 shadow-xl rounded-xl px-10">
            <div className="my-6 flex justify-between items-center">
              <div className="">
                <span className="text-xs font-semibold">
                  Signed In As : {props.email}
                </span>
                <span className="text-sm font-bold text-gray-600"></span>
              </div>
              <button
                className="font-semibold text-orange-600 text-sm underline hover:text-orange-800"
                fdprocessedid="paknmg"
              >
                <a href="/api/logout">Logout</a>
              </button>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">
                Fill in your details
              </h2>
            </div>

            <form method="POST" action="./api/update">
              <fieldset className="mt-4">
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="student"
                      name="notification-method"
                      value="student"
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      onChange={(event) => {
                        setPosition("student");
                      }}
                    />
                    <label
                      htmlFor="student"
                      className="ml-3 block text-sm font-medium capitalize text-gray-700"
                    >
                      student
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="college"
                      name="notification-method"
                      value="college"
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      onChange={(event) => {
                        setPosition("college");
                      }}
                    />
                    <label
                      htmlFor="college"
                      className="ml-3 block text-sm font-medium capitalize text-gray-700"
                    >
                      college
                    </label>
                  </div>
                </div>
              </fieldset>

              {position == "student" && (
                <div>
                  <div className="col-span-6 sm:col-span-4 mt-4">
                    <div className="flex">
                      <label
                        htmlFor="paraphase"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Paraphase
                      </label>
                      <span className="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="rollnumber"
                        id="rollnumber"
                        autoComplete="roll-number"
                        required=""
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="a94bca"
                      />
                      <div>
                        <button
                          type="button"
                          className="ml-3 mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                          fdprocessedid="ekxexs"
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                   
                    <p
                      className="mt-1 text-xs tracking-wide text-gray-500"
                      id="pharaphase-description"
                    >
                      Enter a passphrase that associates with your college
                      placement cell.
                    </p>
                  </div>
                  <div className="col-span-6 sm:col-span-4 mt-4">
                    <div className="flex">
                      <label
                        htmlFor="paraphase"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>

                      <span className="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        // autoComplete="email"
                        // required=""
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="a94bca"
                      />
                      
                    </div>
                   
                    
                  </div>
                  <div className="grid grid-cols-6 gap-6 mt-4">
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        required=""
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="yw7fvi"
                        disabled=""
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        required=""
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="14yoqp"
                        disabled=""
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2 relative -top-[23px]">
                      <label
                        className="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                        id="headlessui-listbox-label-1"
                      >
                        Gender
                        <span className="ml-1 mt-1 text-red-600 font-semibold">
                          *
                        </span>
                      </label>
                      <div className="relative -top-5 left-0">
                        <button
                          className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                          id="headlessui-listbox-button-2"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-labelledby="headlessui-listbox-label-1 headlessui-listbox-button-2"
                          fdprocessedid="eijr6h"
                        >
                          <span className="block truncate text-black">
                            Male
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          htmlFor="rollnumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Roll Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="rollnumber"
                        id="rollnumber"
                        autoComplete="roll-number"
                        disabled=""
                        required=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        // value=""
                        fdprocessedid="3p27qy"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        required=""
                        disabled=""
                        pattern="[6789][0-9]{9}"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        // value=""
                        fdprocessedid="zyy11"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex">
                      <label className="mt-4 mb-2 block text-sm font-medium text-gray-700">
                        College
                      </label>
                      <span className="relative top-4 ml-1 text-red-600 font-semibold">
                        *
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        required=""
                        name="college"
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="bpmeh9"
                        disabled=""
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 "
                      fdprocessedid="2gz5pi"
                    >
                      Submit
                    </button>
                    {/* <input type="submit" value="submit" /> */}
                  </div>
                </div>
              )}






              {position == "college" && <div>
                
              <div class="col-span-6 sm:col-span-4 mt-4">
                <div class="flex">
                  <label for="paraphase" class="block text-sm font-medium text-gray-700">
                    Paraphase
                  </label>
                  <span class="ml-1 text-red-600 font-semibold">*</span>
                </div>
                <div class="flex items-center">
                  <input type="text" name="rollnumber" id="rollnumber" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"/>
                  <div>
                    <button
                      type="button"
                      class="ml-3 mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                      Verify
                    </button>
                  </div>
                </div>
                <p class="mt-1 text-xs text-gray-500" id="pharaphase-description">
                  Enter a passphrase that associates with your college placement
                  cell.
                </p>
              </div>

              <div className="col-span-6 sm:col-span-4 mt-4">
                    <div className="flex">
                      <label
                        htmlFor="paraphase"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>

                      <span className="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        // autoComplete="email"
                        // required=""
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="a94bca"
                      />
                    </div>
                  </div>
            <div class="grid grid-cols-6 gap-6 mt-4">
              
                <div class="col-span-6 sm:col-span-2 ">
        
                    <div class="flex">
                    <label for="firstName" class="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" required/>
                </div>
                <div class="col-span-6 sm:col-span-2 ">
                  <div class="flex">
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    required/>
                    </div>
                    <div class="col-span-6 sm:col-span-2 relative -top-[23px]">
                  <label
                    class="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                    id="headlessui-listbox-label-1"
                  >
                    Gender
                    <span class="ml-1 mt-1 text-red-600 font-semibold">*</span>
                  </label>
                  <div class="relative -top-[23px] left-0">
                  <select name="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                  </div>

                </div>
            </div>
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="rollnumber"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Roll Number
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="rollnumber"
                    id="rollnumber"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" required
                  />
                </div>
              </div>
              <div class="relative">
                <div class="flex">
                  <label class="mt-4 mb-2 block text-sm font-medium text-gray-700">
                    College
                  </label>
                  <span class="relative top-4 ml-1 text-red-600 font-semibold">
                    *
                  </span>
                </div>
                <div class="relative">
                  <input
                    type="text"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                  />
                </div>
              </div>
              <div class="grid grid-cols-6 gap-4">
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="designation"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Designation
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="designation"
                    name="designation"
                    type="text"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      College Website
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="website"
                    name="website"
                    type="text"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Placement Email address
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Placement Phone Number
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="phone"
                    name="phone"
                    type="tel"
                  />
                </div>
              </div>
              <div class="grid grid-cols-6 gap-4">
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Principal Email address
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Principal Phone Number
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                  />
                </div>
              </div>
              <div class="mt-4">
                <button
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 ">
                  Submit
                </button>
              </div>
                
                </div>}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

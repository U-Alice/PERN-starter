import { ReactSVG } from "react-svg";
import Line from "../assets/svg/small-line.svg";
import Wrapper from "./wrapper";
import { AiOutlineUser } from "react-icons/ai";
import Button from "./button";
import { Modal } from "@mantine/core";
import useCustomDisclosure from "../hooks/useCustomDisclosure";
import { useState } from "react";

export default function CreateEmployee() {
  const { opened, open, close } = useCustomDisclosure();
  const [step, setStep] = useState(1);

  const increment = () => {
    if (step != 3) {
      setStep(prevStep => prevStep + 1);
    }
  };

  return (
    <>
      <button
        class="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle text-xs font-bold uppercase shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          stroke-width="2"
          class="w-4 h-4"
        >
          <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
        </svg>
        Add member
      </button>
      <Modal opened={opened} onClose={close} centered>
        <div className="bg-white h-full w-full rounded-md p-2">
          <div className="flex flex-col gap-4">
            <p className="text-center font-bold text-darkb">
              EMPLOYEE REGISTRATION FORM
            </p>
            <p className="text-center text-gray">
              Please fill out the form to register a new employee
            </p>
            <div className="flex items-center">
              <ReactSVG src={Line} className="" />
              <div
                className={`h-10 w-16 flex items-center justify-center border border-gray rounded-full ${
                  step == 1 ? "bg-darkb text-white" : "bg-white text-black"
                }`}
              >
                <button onClick={() => setStep(1)}>1</button>
              </div>
              <ReactSVG src={Line} className="" />
              <div
                className={`h-10 w-18 flex items-center justify-center border border-gray rounded-full ${
                  step == 2 ? "bg-darkb text-white" : "bg-white text-black"
                }`}
              >
                <button onClick={() => setStep(2)}>2</button>
              </div>
              <ReactSVG src={Line} className="" />
              <div
                className={`h-10 w-16 flex items-center justify-center border border-gray rounded-full ${
                  step == 3 ? "bg-darkb text-white" : "bg-white text-black"
                }`}
              >
                <button onClick={() => setStep(3)}>3</button>
              </div>
              <ReactSVG src={Line} className="" />
            </div>
          </div>
          {step == 1 && (
            <div className="flex flex-col gap-8 mt-8">
              <Wrapper
                label="First Name"
                icon={<AiOutlineUser />}
                placeholder={"Enter your first name"}
              />
              <Wrapper
                label="Last Name"
                icon={<AiOutlineUser />}
                placeholder={"Enter your last name"}
              />
              <Wrapper
                label="National Identity"
                icon={<AiOutlineUser />}
                placeholder={"Enter your national identity"}
              />
              <Wrapper
                label="Telephone"
                icon={<AiOutlineUser />}
                placeholder={"Enter your phone number"}
              />
            </div>
          )}

          {step == 2 && (
            <div className="flex flex-col gap-8 mt-8">
              <Wrapper
                label="Email"
                icon={<AiOutlineUser />}
                placeholder={"Enter your first name"}
              />
              <Wrapper
                label="Department"
                icon={<AiOutlineUser />}
                placeholder={"Enter your last name"}
              />
              <Wrapper
                label="Position"
                icon={<AiOutlineUser />}
                placeholder={"Enter your national identity"}
              />
            </div>
          )}
          {step == 3 && (
            <div className="flex flex-col gap-8 mt-8">
              <Wrapper
                label="Laptop Manufacturer"
                icon={<AiOutlineUser />}
                placeholder={"Enter your first name"}
              />
              <Wrapper
                label="Model"
                icon={<AiOutlineUser />}
                placeholder={"Enter your last name"}
              />
              <Wrapper
                label="Serial Number"
                icon={<AiOutlineUser />}
                placeholder={"Enter your national identity"}
              />
            </div>
          )}

          <div className="w-full flex justify-end mt-16">
            {step == 3 && <Button content="Submit" className="px-4" />}
            {(step == 1 || step == 2) && (
              <Button content="Next" className="px-4" onClick={increment} />
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

import { React, useCallback } from "react";
import { X } from "lucide-react";
import cx from "classnames";
import * as Toast from "@radix-ui/react-toast";
import { useMediaQuery } from "hooks/use-media-query.js";

const Alert = ({ open, setOpen }) => {
  const onClick = useCallback(() => setOpen(false), [setOpen]);
  const isLg = useMediaQuery("(min-width: 1024px)");
  return (
    <Toast.Provider swipeDirection={isLg ? "right" : "down"} duration={2500}>
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className={cx(
          "z-50 fixed bottom-4 inset-x-4 mx-auto lg:top-4 lg:right-4 lg:left-auto lg:bottom-auto lg:w-full shadow-lg rounded-lg group bg-white max-w-[320px]",
          "state-open:animate-toast-slide-in-bottom lg:state-open:animate-toast-slide-in-right",
          "state-closed:animate-toast-hide",
          "swipe-direction-right:swipe-end:animate-toast-swipe-out-x",
          "swipe-direction-right:translate-x-toast-swipe-move-x",
          "swipe-direction-down:swipe-end:animate-toast-swipe-out-y",
          "swipe-direction-down:translate-y-toast-swipe-move-y",
          "swipe-cancel:translate-x-0 swipe-cancel:duration-200 swipe-cancel:ease-[ease]",
        )}
      >
        <button
          className="w-5 h-5 bg-white shadow-lg absolute top-0 left-0 p-0 rounded-full border -translate-x-2 -translate-y-2 flex justify-center items-center opacity-0 group-hover:opacity-100 transition ease-in-out"
          onClick={onClick}
        >
          <X
            width={14}
            height={14}
            className="text-[#858585] hover:text-black transition ease-in-out"
          />
        </button>
        <div className="flex">
          <div className="w-0 flex-1 flex items-center pl-5 py-4">
            <div className="w-full radix">
              <Toast.Title className="text-sm font-semibold text-black">
                Invalid IP Address
              </Toast.Title>
              <Toast.Description className="mt-1 text-sm text-[#858585]">
                Please enter a valid IP address.
              </Toast.Description>
            </div>
          </div>
        </div>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  );
};

export default Alert;

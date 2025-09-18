import type { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Login from "./Login";
import Registration from "./Registration";
import { changeAction } from "../../store/slices/sideBarSlice";
import Basket from "./Basket";
import { ArrowLeft, X } from "lucide-react";
import Button from "../Inputs/Button";



const SideModal: FC = () => {
  const { childrenKey, isOpen } = useAppSelector(state => state.sideBarPages);
  const dispatch = useAppDispatch();
  return (
    <div>
      {/* Overlay */}
      <div
        onClick={() => { dispatch(changeAction({ childrenKey: null })) }}
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-2">
          <div className="h-9 w-9">
            {childrenKey === "registration" && (
              <Button
                className="flex h-9 items-center justify-center gap-2"
                onClick={() => { dispatch(changeAction({ childrenKey: 'login' })) }}
                ariaLabel="Back"
              >
                <ArrowLeft />
                <p>Увійти</p>
              </Button>
            )}
          </div>

          <Button
            className="flex h-9 w-9 items-center justify-center rounded-full"
            onClick={() => dispatch(changeAction({ childrenKey: null }))}
            ariaLabel="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>


        <div className="p-6">
          {(childrenKey != null && childrenKey === "login") && <Login />}
          {(childrenKey != null && childrenKey === "registration") && <Registration />}
          {(childrenKey != null && childrenKey === "basket") && <Basket />}
        </div>

      </div>
    </div>
  );
};

export default SideModal;

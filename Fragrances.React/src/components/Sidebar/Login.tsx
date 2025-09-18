import type { FC, FormEvent } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { changeAction } from "../../store/slices/sideBarSlice";
import TextInput from "../Inputs/TextInput";
import { validateEmail, validatePassword } from "../../utils/validotors";

const Login: FC = () => {
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isEmailValid = !validateEmail(email);
    const isPasswordValid = !validatePassword(password);
    const isFormValid = isEmailValid && isPasswordValid;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            console.log("login with:", { email, password });
        }
    };


    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Увійдіть</h2>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                    <label className="block text-sm mb-1">E-mail</label>
                    <TextInput
                        type="text"
                        placeholder="Введіть email"
                        validate={validateEmail}
                    />
                </div>
                <div>
                    <label className="block text-sm mb-1">Пароль</label>
                    <TextInput
                        type="password"
                        placeholder="Введіть пароль"
                        validate={validatePassword}
                    />
                </div>
                <button
                    type="submit"
                    className="relative w-full py-2 border border-black rounded-md overflow-hidden
                    transition-colors duration-500 ease-in-out
                    hover:text-white group"
                >
                    <span className="relative z-10">Увійти</span>
                    <span
                        className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0
                         transition-transform duration-500 ease-in-out"
                    />
                </button>


            </form>

            <div className="mt-4 text-sm text-center">
                <a href="#" className="text-blue-600">
                    Забули пароль?
                </a>
            </div>

            <div className="mt-6 text-sm text-center">
                Ви тут вперше?{" "}
                <button
                    className="underline text-blue-600 hover:cursor-pointer"
                    onClick={() => dispatch(changeAction({ childrenKey: "registration" }))}
                >
                    Зареєструватися
                </button>
            </div>
        </>
    );
};

export default Login;

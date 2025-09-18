import type { FC } from "react";
import { useAppDispatch } from "../../store/store";
import { changeAction } from "../../store/slices/sideBarSlice";

const Login: FC = () => {
      const dispatch = useAppDispatch();
    
      const handleRegistrationClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("login");
        dispatch(changeAction({ childrenKey: 'registration' }));
      };

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Увійдіть</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm mb-1">E-mail</label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm mb-1">Пароль</label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-black text-white rounded-md"
                >
                    Увійти
                </button>
            </form>

            <div className="mt-4 text-sm text-center">
                <a href="#" className="text-blue-600">
                    Забули пароль?
                </a>
            </div>

            <div className="mt-6 text-sm text-center">
                Ви тут вперше?{" "}
                <button className="underline text-blue-600" onClick={handleRegistrationClick}>Зареєструватися</button>
            </div>
        </>
    )
}

export default Login;
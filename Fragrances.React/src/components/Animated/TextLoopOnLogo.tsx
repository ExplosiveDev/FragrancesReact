import type { FC } from "react"
import { TextLoop } from "../../../components/motion-primitives/text-loop"

const TextLoopOnLogo: FC = () => {
    return (
        <TextLoop
            className='overflow-y-clip p-1'
            transition={{
                type: 'spring',
                stiffness: 900,
                damping: 80,
                mass: 5,
            }}
            variants={{
                initial: {
                    y: 20,
                    rotateX: 90,
                    opacity: 0,
                    filter: 'blur(4px)',
                },
                animate: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                },
                exit: {
                    y: -20,
                    rotateX: -90,
                    opacity: 0,
                    filter: 'blur(4px)',
                },
            }}
        >
            <span>Fresh parfums</span>
            <span>Luxurious Fragrances</span>
            <span>Sexy parfums</span>
            <span>Designed Fragrances</span>
        </TextLoop>
    )
}

export default TextLoopOnLogo;
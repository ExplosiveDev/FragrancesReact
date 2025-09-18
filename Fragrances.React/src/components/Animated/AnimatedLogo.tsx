import type { FC } from "react";
import { TextShimmerWave } from "../../../components/motion-primitives/text-shimmer-wave"

const AnimatedLogo:FC = () => {
    return(
      <TextShimmerWave
        duration={1}
        spread={1}
        zDistance={1}
        scaleDistance={1.1}
        rotateYDistance={20}
        className="text-4xl text-center " >
        Fragrances
      </TextShimmerWave>
    )
}

export default AnimatedLogo
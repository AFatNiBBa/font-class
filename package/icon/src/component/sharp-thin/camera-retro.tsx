
import { Icon } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=sharp-thin camera-retro}
 * @preview ![camera-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/camera-retro.svg)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 96L16 96l0 136 130 0c18.5-42.4 60.8-72 110-72s91.5 29.6 110 72l130 0 0-184L261.3 48 201.6 92.8c-2.8 2.1-6.1 3.2-9.6 3.2zM16 248l0 216 480 0 0-216-124.3 0c2.8 10.2 4.3 20.9 4.3 32c0 66.3-53.7 120-120 120s-120-53.7-120-120c0-11.1 1.5-21.8 4.3-32L16 248zM192 80l64-48 240 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 96 0 80l16 0 176 0zM360 280a104 104 0 1 0 -208 0 104 104 0 1 0 208 0zM64 32l96 0 0 16L64 48l0-16z" />
    </Icon>
);

export default CameraRetro;
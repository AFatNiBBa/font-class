
import { Icon } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=sharp-solid flashlight}
 * @preview ![flashlight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/flashlight.svg)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 416l64 0 0-320-64 0 0 320zM544 97.7C449.1 107.9 384 160 384 160L0 160 0 352l384 0s65.1 52.1 160 62.3l0-316.5zM224 224l96 0 0 64-96 0 0-64z" />
    </Icon>
);

export default Flashlight;
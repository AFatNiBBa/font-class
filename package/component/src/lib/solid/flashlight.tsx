
import { Icon } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=solid flashlight}
 * @preview ![flashlight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/flashlight.svg)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 416l32 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-32 0 0 320zM544 97.7C449.1 107.9 384 160 384 160L48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l336 0s65.1 52.1 160 62.3l0-316.5zM224 256c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Flashlight;
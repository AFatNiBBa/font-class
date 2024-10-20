
import { Icon } from "../../index";

/**
 * A component that renders the `square-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up?s=sharp-light square-up}
 * @preview ![square-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-up.svg)
 */
const SquareUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM192 256l0 96 64 0 0-96 0-32 32 0 18.7 0L224 141.3 141.3 224l18.7 0 32 0 0 32zM224 96l22.6 22.6L352 224l0 32-32 0-32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32-32 0-32 0 0-32L201.4 118.6 224 96z" />
    </Icon>
);

export default SquareUp;
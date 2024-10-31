
import { Icon } from "../../index";

/**
 * A component that renders the `square-c` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-c?s=sharp-light square-c}
 * @preview ![square-c](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-c.svg)
 */
const SquareC: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM128 256c0 53 43 96 96 96c31.4 0 59.3-15.1 76.8-38.5l25.6 19.2C303.1 363.8 265.9 384 224 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c41.9 0 79.1 20.2 102.4 51.2l-25.6 19.2C283.3 175.1 255.4 160 224 160c-53 0-96 43-96 96z" />
    </Icon>
);

export default SquareC;
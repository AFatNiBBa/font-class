
import { Icon } from "../../index";

/**
 * A component that renders the `square-m` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-m?s=sharp-light square-m}
 * @preview ![square-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-m.svg)
 */
const SquareM: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM96 144l0-16 24.3 0 4.8 6.8L224 276.1l98.9-141.3 4.8-6.8 24.3 0 0 16 0 224 0 16-32 0 0-16 0-173.2L237.1 313.2 224 331.9l-13.1-18.7L128 194.8 128 368l0 16-32 0 0-16 0-224z" />
    </Icon>
);

export default SquareM;
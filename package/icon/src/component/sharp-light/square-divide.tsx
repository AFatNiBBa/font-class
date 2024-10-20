
import { Icon } from "../../index";

/**
 * A component that renders the `square-divide` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-divide?s=sharp-light square-divide}
 * @preview ![square-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-divide.svg)
 */
const SquareDivide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM248 136l0 48-48 0 0-48 48 0zM128 240l192 0 16 0 0 32-16 0-192 0-16 0 0-32 16 0zm72 88l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default SquareDivide;
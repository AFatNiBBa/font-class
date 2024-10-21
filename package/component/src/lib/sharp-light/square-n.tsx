
import { Icon } from "../../index";

/**
 * A component that renders the `square-n` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-n?s=sharp-light square-n}
 * @preview ![square-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-n.svg)
 */
const SquareN: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm128 96l24.2 0 4.8 6.7L288 318.1 288 144l0-16 32 0 0 16 0 224 0 16-24.2 0-4.8-6.7L160 193.9 160 368l0 16-32 0 0-16 0-224 0-16z" />
    </Icon>
);

export default SquareN;
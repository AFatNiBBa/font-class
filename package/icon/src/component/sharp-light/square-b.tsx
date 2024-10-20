
import { Icon } from "../../index";

/**
 * A component that renders the `square-b` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-b?s=sharp-light square-b}
 * @preview ![square-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-b.svg)
 */
const SquareB: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm128 96l16 0 104 0c39.8 0 72 32.2 72 72c0 19.3-7.6 36.8-19.9 49.7C321.6 262.2 336 285.4 336 312c0 39.8-32.2 72-72 72l-120 0-16 0 0-16 0-112 0-112 0-16zm160 72c0-22.1-17.9-40-40-40l-88 0 0 80 88 0c22.1 0 40-17.9 40-40zM160 352l104 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-16 0-88 0 0 80z" />
    </Icon>
);

export default SquareB;
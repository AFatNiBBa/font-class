
import { Icon } from "../../index";

/**
 * A component that renders the `square-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=sharp-light square-left}
 * @preview ![square-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-left.svg)
 */
const SquareLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l384 0 0 384L32 448 32 64zM0 32L0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32 0 32zM224 224l96 0 0 64-96 0-32 0 0 32 0 18.7L109.3 256 192 173.3l0 18.7 0 32 32 0zM64 256l22.6 22.6L192 384l32 0 0-32 0-32 32 0 64 0 32 0 0-32 0-64 0-32-32 0-64 0-32 0 0-32 0-32-32 0L86.6 233.4 64 256z" />
    </Icon>
);

export default SquareLeft;
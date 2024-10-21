
import { Icon } from "../../index";

/**
 * A component that renders the `square-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=sharp-light square-down}
 * @preview ![square-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-down.svg)
 */
const SquareDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 448l0-384L32 64l0 384 384 0zm32 32l-32 0L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 384 0 32zM256 256l0-96-64 0 0 96 0 32-32 0-18.7 0L224 370.7 306.7 288 288 288l-32 0 0-32zM224 416l-22.6-22.6L96 288l0-32 32 0 32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 64 0 32 32 0 32 0 0 32L246.6 393.4 224 416z" />
    </Icon>
);

export default SquareDown;
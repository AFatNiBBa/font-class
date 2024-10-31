
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=sharp-duotone-solid square-down}
 * @preview ![square-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-down.svg)
 */
const SquareDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 256l80 0 0-128 96 0c0 42.7 0 85.3 0 128l80 0 0 32L224 416 96 288l0-32z" />
        <path d="M272 256l80 0 0 32L224 416 96 288l0-32 80 0 0-128 96 0 0 128z" />
    </Icon>
);

export default SquareDown;
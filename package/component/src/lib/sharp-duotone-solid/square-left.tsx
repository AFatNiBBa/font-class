
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=sharp-duotone-solid square-left}
 * @preview ![square-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-left.svg)
 */
const SquareLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM64 256L192 384l32 0 0-80 128 0 0-96-128 0 0-80-32 0L64 256z" />
        <path d="M224 208l0-80-32 0L64 256 192 384l32 0 0-80 128 0 0-96-128 0z" />
    </Icon>
);

export default SquareLeft;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-j` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-j?s=sharp-duotone-solid square-j}
 * @preview ![square-j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-j.svg)
 */
const SquareJ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM112 256l48 0 0 24 0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136 0-24 48 0 0 24 0 136c0 53-43 96-96 96s-96-43-96-96l0-8 0-24z" />
        <path d="M304 128l0 24 0 136c0 53-43 96-96 96s-96-43-96-96l0-8 0-24 48 0 0 24 0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136 0-24 48 0z" />
    </Icon>
);

export default SquareJ;
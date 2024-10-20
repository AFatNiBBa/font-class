
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-up-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down?s=sharp-duotone-solid arrows-up-down}
 * @preview ![arrows-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-up-down.svg)
 */
const ArrowsUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M18.7 367.9l22.6 22.6 96 96L160 509.1l22.6-22.6 96-96 22.6-22.6L256 322.6l-22.6 22.6L192 386.6 192 256c-21.3 0-42.7 0-64 0l0 130.6L86.6 345.2 64 322.6 18.7 367.9z" />
        <path d="M182.6 25.4L160 2.7 137.4 25.4l-96 96L18.7 144 64 189.3l22.6-22.6L128 125.3 128 256l64 0 0-130.7 41.4 41.4L256 189.3 301.3 144l-22.6-22.6-96-96z" />
    </Icon>
);

export default ArrowsUpDown;

import { Icon } from "../../index";

/**
 * A component that renders the `arrows-up-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down?s=sharp-solid arrows-up-down}
 * @preview ![arrows-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrows-up-down.svg)
 */
const ArrowsUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M182.6 25.4L160 2.7 137.4 25.4l-96 96L18.7 144 64 189.3l22.6-22.6L128 125.3l0 261.5L86.6 345.4 64 322.7 18.7 368l22.6 22.6 96 96L160 509.3l22.6-22.6 96-96L301.3 368 256 322.7l-22.6 22.6L192 386.7l0-261.5 41.4 41.4L256 189.3 301.3 144l-22.6-22.6-96-96z" />
    </Icon>
);

export default ArrowsUpDown;
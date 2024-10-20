
import { Icon } from "../../index";

/**
 * A component that renders the `angle-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-left?s=sharp-regular angle-left}
 * @preview ![angle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/angle-left.svg)
 */
const AngleLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M30.1 256l17-17L207 79l17-17L257.9 96l-17 17L97.9 256 241 399l17 17L224 449.9l-17-17L47 273l-17-17z" />
    </Icon>
);

export default AngleLeft;
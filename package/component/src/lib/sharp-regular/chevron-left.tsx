
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=sharp-regular chevron-left}
 * @preview ![chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chevron-left.svg)
 */
const ChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M-1.9 256l17-17L207 47l17-17L257.9 64 241 81 65.9 256 241 431l17 17L224 481.9l-17-17L15 273l-17-17z" />
    </Icon>
);

export default ChevronLeft;
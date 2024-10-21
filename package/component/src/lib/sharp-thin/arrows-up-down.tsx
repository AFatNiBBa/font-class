
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-up-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down?s=sharp-thin arrows-up-down}
 * @preview ![arrows-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrows-up-down.svg)
 */
const ArrowsUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160.2 4.9l5.5 5.5 104 104 5.7 5.7L264 131.3l-5.7-5.7L168 35.3l0 441.4 90.3-90.3 5.7-5.7L275.3 392l-5.7 5.7-104 104-5.7 5.7-5.7-5.7-104-104L44.7 392 56 380.7l5.7 5.7L152 476.7l0-442.3L53.4 125.9l-5.9 5.4L36.7 119.6l5.9-5.4 112-104 5.6-5.2z" />
    </Icon>
);

export default ArrowsUpDown;
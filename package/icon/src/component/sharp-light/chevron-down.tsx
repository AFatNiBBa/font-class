
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=sharp-light chevron-down}
 * @preview ![chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chevron-down.svg)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 406.6l11.3-11.3 192-192L470.6 192 448 169.4l-11.3 11.3L256 361.4 75.3 180.7 64 169.4 41.4 192l11.3 11.3 192 192L256 406.6z" />
    </Icon>
);

export default ChevronDown;
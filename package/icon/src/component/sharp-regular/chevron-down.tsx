
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=sharp-regular chevron-down}
 * @preview ![chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chevron-down.svg)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 417.9l17-17L465 209l17-17L448 158.1l-17 17-175 175L81 175l-17-17L30.1 192l17 17L239 401l17 17z" />
    </Icon>
);

export default ChevronDown;
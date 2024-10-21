
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=sharp-thin chevron-down}
 * @preview ![chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chevron-down.svg)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 403.3l5.7-5.7 208-208 5.7-5.7L464 172.7l-5.7 5.7L256 380.7 53.7 178.3 48 172.7 36.7 184l5.7 5.7 208 208 5.7 5.7z" />
    </Icon>
);

export default ChevronDown;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=sharp-duotone-solid chevron-down}
 * @preview ![chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chevron-down.svg)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 429.3l-22.6-22.6-192-192L18.7 192 64 146.7l22.6 22.6L256 338.7 425.4 169.4 448 146.7 493.3 192l-22.6 22.6-192 192L256 429.3z" />
    </Icon>
);

export default ChevronDown;
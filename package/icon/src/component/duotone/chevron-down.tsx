
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=duotone chevron-down}
 * @preview ![chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chevron-down.svg)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M278.6 406.6c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L256 338.7 425.4 169.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192z" />
    </Icon>
);

export default ChevronDown;
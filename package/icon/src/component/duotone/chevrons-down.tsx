
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=duotone chevrons-down}
 * @preview ![chevrons-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chevrons-down.svg)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 64c0 8.2 3.1 16.4 9.4 22.6l192 192c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 210.7 86.6 41.4C80.4 35.1 72.2 32 64 32s-16.4 3.1-22.6 9.4S32 55.8 32 64z" />
        <path d="M278.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L256 402.7 425.4 233.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192z" />
    </Icon>
);

export default ChevronsDown;
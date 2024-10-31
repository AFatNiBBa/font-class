
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=sharp-duotone-solid chevrons-down}
 * @preview ![chevrons-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chevrons-down.svg)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M18.7 64L41.4 86.6l192 192L256 301.3l22.6-22.6 192-192L493.3 64 448 18.7 425.4 41.4 256 210.7 86.6 41.4 64 18.7 18.7 64z" />
        <path d="M256 493.3l-22.6-22.6-192-192L18.7 256 64 210.7l22.6 22.6L256 402.7 425.4 233.4 448 210.7 493.3 256l-22.6 22.6-192 192L256 493.3z" />
    </Icon>
);

export default ChevronsDown;
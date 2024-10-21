
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=sharp-duotone-solid chevrons-left}
 * @preview ![chevrons-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chevrons-left.svg)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M210.7 256l22.6-22.6 192-192L448 18.7 493.3 64 470.6 86.6 301.3 256 470.6 425.4 493.3 448 448 493.3l-22.6-22.6-192-192L210.7 256z" />
        <path d="M18.7 256l22.6-22.6 192-192L256 18.7 301.3 64 278.6 86.6 109.3 256 278.6 425.4 301.3 448 256 493.3l-22.6-22.6-192-192L18.7 256z" />
    </Icon>
);

export default ChevronsLeft;
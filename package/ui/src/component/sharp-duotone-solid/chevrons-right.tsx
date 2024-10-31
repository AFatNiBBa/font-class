
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=sharp-duotone-solid chevrons-right}
 * @preview ![chevrons-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chevrons-right.svg)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M18.7 64L41.4 86.6 210.7 256 41.4 425.4 18.7 448 64 493.3l22.6-22.6 192-192L301.3 256l-22.6-22.6-192-192L64 18.7 18.7 64z" />
        <path d="M493.3 256l-22.6 22.6-192 192L256 493.3 210.7 448l22.6-22.6L402.7 256 233.4 86.6 210.7 64 256 18.7l22.6 22.6 192 192L493.3 256z" />
    </Icon>
);

export default ChevronsRight;
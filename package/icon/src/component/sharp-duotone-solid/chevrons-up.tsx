
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=sharp-duotone-solid chevrons-up}
 * @preview ![chevrons-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chevrons-up.svg)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M18.7 448L64 493.3l22.6-22.6L256 301.3 425.4 470.6 448 493.3 493.3 448l-22.6-22.6-192-192L256 210.7l-22.6 22.6-192 192L18.7 448z" />
        <path d="M256 18.7l22.6 22.6 192 192L493.3 256 448 301.3l-22.6-22.6L256 109.3 86.6 278.6 64 301.3 18.7 256l22.6-22.6 192-192L256 18.7z" />
    </Icon>
);

export default ChevronsUp;

import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=sharp-solid chevrons-down}
 * @preview ![chevrons-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chevrons-down.svg)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278.6 278.6L256 301.3l-22.6-22.6-192-192L18.7 64 64 18.7 86.6 41.4 256 210.7 425.4 41.4 448 18.7 493.3 64 470.6 86.6l-192 192zm0 192L256 493.3l-22.6-22.6-192-192L18.7 256 64 210.7l22.6 22.6L256 402.7 425.4 233.4 448 210.7 493.3 256l-22.6 22.6-192 192z" />
    </Icon>
);

export default ChevronsDown;
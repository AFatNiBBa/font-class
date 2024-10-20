
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=solid chevrons-left}
 * @preview ![chevrons-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chevrons-left.svg)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192zm384-192l-192 192c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 470.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
    </Icon>
);

export default ChevronsLeft;
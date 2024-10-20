
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=solid chevrons-down}
 * @preview ![chevrons-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chevrons-down.svg)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L256 402.7 425.4 233.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192zm192-384l-192 192c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L256 210.7 425.4 41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
    </Icon>
);

export default ChevronsDown;

import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=light chevrons-left}
 * @preview ![chevrons-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chevrons-left.svg)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M52.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l192 192c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L86.6 256 267.3 75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-192 192zm384-192l-192 192c-6.2 6.2-6.2 16.4 0 22.6l192 192c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 256 459.3 75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z" />
    </Icon>
);

export default ChevronsLeft;
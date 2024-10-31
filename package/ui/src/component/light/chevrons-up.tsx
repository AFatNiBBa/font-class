
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=light chevrons-up}
 * @preview ![chevrons-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chevrons-up.svg)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267.3 52.7c-6.2-6.2-16.4-6.2-22.6 0l-192 192c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 86.6 436.7 267.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-192-192zm192 384l-192-192c-6.2-6.2-16.4-6.2-22.6 0l-192 192c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6 436.7 459.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z" />
    </Icon>
);

export default ChevronsUp;
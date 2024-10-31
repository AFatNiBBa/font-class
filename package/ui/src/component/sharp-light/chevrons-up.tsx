
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=sharp-light chevrons-up}
 * @preview ![chevrons-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chevrons-up.svg)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267.3 52.7L256 41.4 244.7 52.7l-192 192L41.4 256 64 278.6l11.3-11.3L256 86.6 436.7 267.3 448 278.6 470.6 256l-11.3-11.3-192-192zm0 192L256 233.4l-11.3 11.3-192 192L41.4 448 64 470.6l11.3-11.3L256 278.6 436.7 459.3 448 470.6 470.6 448l-11.3-11.3-192-192z" />
    </Icon>
);

export default ChevronsUp;
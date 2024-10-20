
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=sharp-light chevrons-left}
 * @preview ![chevrons-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chevrons-left.svg)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M52.7 244.7L41.4 256l11.3 11.3 192 192L256 470.6 278.6 448l-11.3-11.3L86.6 256 267.3 75.3 278.6 64 256 41.4 244.7 52.7l-192 192zm192 0L233.4 256l11.3 11.3 192 192L448 470.6 470.6 448l-11.3-11.3L278.6 256 459.3 75.3 470.6 64 448 41.4 436.7 52.7l-192 192z" />
    </Icon>
);

export default ChevronsLeft;
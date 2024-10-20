
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=sharp-light chevrons-right}
 * @preview ![chevrons-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chevrons-right.svg)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267.3 267.3L278.6 256l-11.3-11.3-192-192L64 41.4 41.4 64 52.7 75.3 233.4 256 52.7 436.7 41.4 448 64 470.6l11.3-11.3 192-192zm192 0L470.6 256l-11.3-11.3-192-192L256 41.4 233.4 64l11.3 11.3L425.4 256 244.7 436.7 233.4 448 256 470.6l11.3-11.3 192-192z" />
    </Icon>
);

export default ChevronsRight;
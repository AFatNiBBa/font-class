
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=sharp-light chevrons-down}
 * @preview ![chevrons-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chevrons-down.svg)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M244.7 267.3L256 278.6l11.3-11.3 192-192L470.6 64 448 41.4 436.7 52.7 256 233.4 75.3 52.7 64 41.4 41.4 64 52.7 75.3l192 192zm0 192L256 470.6l11.3-11.3 192-192L470.6 256 448 233.4l-11.3 11.3L256 425.4 75.3 244.7 64 233.4 41.4 256l11.3 11.3 192 192z" />
    </Icon>
);

export default ChevronsDown;
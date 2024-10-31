
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=sharp-solid chevrons-left}
 * @preview ![chevrons-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chevrons-left.svg)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M41.4 233.4L18.7 256l22.6 22.6 192 192L256 493.3 301.3 448l-22.6-22.6L109.3 256 278.6 86.6 301.3 64 256 18.7 233.4 41.4l-192 192zm192 0L210.7 256l22.6 22.6 192 192L448 493.3 493.3 448l-22.6-22.6L301.3 256 470.6 86.6 493.3 64 448 18.7 425.4 41.4l-192 192z" />
    </Icon>
);

export default ChevronsLeft;
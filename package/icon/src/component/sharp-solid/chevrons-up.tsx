
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=sharp-solid chevrons-up}
 * @preview ![chevrons-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chevrons-up.svg)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278.6 41.4L256 18.7 233.4 41.4l-192 192L18.7 256 64 301.3l22.6-22.6L256 109.3 425.4 278.6 448 301.3 493.3 256l-22.6-22.6-192-192zm0 192L256 210.7l-22.6 22.6-192 192L18.7 448 64 493.3l22.6-22.6L256 301.3 425.4 470.6 448 493.3 493.3 448l-22.6-22.6-192-192z" />
    </Icon>
);

export default ChevronsUp;
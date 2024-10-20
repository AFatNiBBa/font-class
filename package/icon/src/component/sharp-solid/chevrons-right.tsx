
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=sharp-solid chevrons-right}
 * @preview ![chevrons-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chevrons-right.svg)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278.6 278.6L301.3 256l-22.6-22.6-192-192L64 18.7 18.7 64 41.4 86.6 210.7 256 41.4 425.4 18.7 448 64 493.3l22.6-22.6 192-192zm192 0L493.3 256l-22.6-22.6-192-192L256 18.7 210.7 64l22.6 22.6L402.7 256 233.4 425.4 210.7 448 256 493.3l22.6-22.6 192-192z" />
    </Icon>
);

export default ChevronsRight;
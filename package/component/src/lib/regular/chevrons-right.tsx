
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=regular chevrons-right}
 * @preview ![chevrons-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chevrons-right.svg)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M465 239c9.4 9.4 9.4 24.6 0 33.9L273 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L239 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L465 239zM81 47L273 239c9.4 9.4 9.4 24.6 0 33.9L81 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L47 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
    </Icon>
);

export default ChevronsRight;
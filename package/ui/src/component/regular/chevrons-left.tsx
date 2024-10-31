
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=regular chevrons-left}
 * @preview ![chevrons-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chevrons-left.svg)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L239 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 273 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239zM431 47L239 239c-9.4 9.4-9.4 24.6 0 33.9L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-175-175L465 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z" />
    </Icon>
);

export default ChevronsLeft;
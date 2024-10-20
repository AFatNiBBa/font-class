
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=sharp-regular chevrons-left}
 * @preview ![chevrons-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chevrons-left.svg)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M47 239l-17 17 17 17L239 465l17 17L289.9 448l-17-17L97.9 256 273 81l17-17L256 30.1 239 47 47 239zm192 0l-17 17 17 17L431 465l17 17L481.9 448l-17-17-175-175L465 81l17-17L448 30.1 431 47 239 239z" />
    </Icon>
);

export default ChevronsLeft;
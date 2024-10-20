
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=sharp-regular chevrons-right}
 * @preview ![chevrons-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chevrons-right.svg)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M273 239l17 17-17 17L81 465l-17 17L30.1 448l17-17 175-175L47 81l-17-17L64 30.1 81 47 273 239zm192 0l17 17-17 17L273 465l-17 17L222.1 448l17-17 175-175L239 81l-17-17L256 30.1l17 17L465 239z" />
    </Icon>
);

export default ChevronsRight;
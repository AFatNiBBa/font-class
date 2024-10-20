
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=sharp-regular chevrons-up}
 * @preview ![chevrons-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chevrons-up.svg)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M273 47l-17-17L239 47 47 239l-17 17L64 289.9l17-17 175-175L431 273l17 17L481.9 256l-17-17L273 47zm0 192l-17-17-17 17L47 431l-17 17L64 481.9l17-17 175-175L431 465l17 17L481.9 448l-17-17L273 239z" />
    </Icon>
);

export default ChevronsUp;
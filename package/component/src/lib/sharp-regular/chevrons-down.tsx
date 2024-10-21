
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=sharp-regular chevrons-down}
 * @preview ![chevrons-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chevrons-down.svg)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M239 273l17 17 17-17L465 81l17-17L448 30.1 431 47l-175 175L81 47l-17-17L30.1 64 47 81 239 273zm0 192l17 17 17-17L465 273l17-17L448 222.1l-17 17-175 175L81 239l-17-17L30.1 256l17 17L239 465z" />
    </Icon>
);

export default ChevronsDown;
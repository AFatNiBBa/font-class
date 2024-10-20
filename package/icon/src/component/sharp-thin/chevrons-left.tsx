
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=sharp-thin chevrons-left}
 * @preview ![chevrons-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chevrons-left.svg)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M50.3 250.3L44.7 256l5.7 5.7 208 208 5.7 5.7L275.3 464l-5.7-5.7L67.3 256 269.7 53.7l5.7-5.7L264 36.7l-5.7 5.7-208 208zm192 0l-5.7 5.7 5.7 5.7 208 208 5.7 5.7L467.3 464l-5.7-5.7L259.3 256 461.7 53.7l5.7-5.7L456 36.7l-5.7 5.7-208 208z" />
    </Icon>
);

export default ChevronsLeft;
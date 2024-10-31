
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=sharp-regular chevron-right}
 * @preview ![chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chevron-right.svg)
 */
const ChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M321.9 256l-17 17L113 465l-17 17L62.1 448l17-17 175-175L79 81l-17-17L96 30.1l17 17L305 239l17 17z" />
    </Icon>
);

export default ChevronRight;
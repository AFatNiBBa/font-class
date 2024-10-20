
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=sharp-light chevron-right}
 * @preview ![chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chevron-right.svg)
 */
const ChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M310.6 256l-11.3 11.3-192 192L96 470.6 73.4 448l11.3-11.3L265.4 256 84.7 75.3 73.4 64 96 41.4l11.3 11.3 192 192L310.6 256z" />
    </Icon>
);

export default ChevronRight;
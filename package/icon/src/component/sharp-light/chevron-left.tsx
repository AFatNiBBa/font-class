
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=sharp-light chevron-left}
 * @preview ![chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chevron-left.svg)
 */
const ChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M9.4 256l11.3-11.3 192-192L224 41.4 246.6 64 235.3 75.3 54.6 256 235.3 436.7 246.6 448 224 470.6l-11.3-11.3-192-192L9.4 256z" />
    </Icon>
);

export default ChevronLeft;
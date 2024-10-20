
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=sharp-solid chevron-left}
 * @preview ![chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chevron-left.svg)
 */
const ChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M2.7 256l22.6 22.6 192 192L240 493.3 285.3 448l-22.6-22.6L93.3 256 262.6 86.6 285.3 64 240 18.7 217.4 41.4l-192 192L2.7 256z" />
    </Icon>
);

export default ChevronLeft;
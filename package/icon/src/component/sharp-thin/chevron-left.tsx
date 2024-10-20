
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=sharp-thin chevron-left}
 * @preview ![chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chevron-left.svg)
 */
const ChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M12.7 256l5.7 5.7 208 208 5.7 5.7L243.3 464l-5.7-5.7L35.3 256 237.7 53.7l5.7-5.7L232 36.7l-5.7 5.7-208 208L12.7 256z" />
    </Icon>
);

export default ChevronLeft;
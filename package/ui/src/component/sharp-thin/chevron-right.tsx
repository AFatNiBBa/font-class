
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=sharp-thin chevron-right}
 * @preview ![chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chevron-right.svg)
 */
const ChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M307.3 256l-5.7 5.7-208 208L88 475.3 76.7 464l5.7-5.7L284.7 256 82.3 53.7 76.7 48 88 36.7l5.7 5.7 208 208 5.7 5.7z" />
    </Icon>
);

export default ChevronRight;
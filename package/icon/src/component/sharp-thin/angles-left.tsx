
import { Icon } from "../../index";

/**
 * A component that renders the `angles-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-left?s=sharp-thin angles-left}
 * @preview ![angles-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/angles-left.svg)
 */
const AnglesLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M50.3 250.3L44.7 256l5.7 5.7 176 176 5.7 5.7L243.3 432l-5.7-5.7L67.3 256 237.7 85.7l5.7-5.7L232 68.7l-5.7 5.7-176 176zm192 0l-5.7 5.7 5.7 5.7 176 176 5.7 5.7L435.3 432l-5.7-5.7L259.3 256 429.7 85.7l5.7-5.7L424 68.7l-5.7 5.7-176 176z" />
    </Icon>
);

export default AnglesLeft;
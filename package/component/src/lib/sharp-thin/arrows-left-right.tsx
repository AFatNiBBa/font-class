
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=sharp-thin arrows-left-right}
 * @preview ![arrows-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrows-left-right.svg)
 */
const ArrowsLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M503.2 260.3l-5.5 5.5-104 104-5.7 5.7-11.3-11.3 5.7-5.7 90.3-90.3-441.4 0 90.3 90.3 5.7 5.7-11.3 11.3-5.7-5.7-104-104L.8 260.1l5.7-5.7 104-104 5.7-5.7 11.3 11.3-5.7 5.7L31.4 252.1l442.3 0-91.5-98.6-5.4-5.9 11.7-10.9 5.4 5.9 104 112 5.2 5.6z" />
    </Icon>
);

export default ArrowsLeftRight;
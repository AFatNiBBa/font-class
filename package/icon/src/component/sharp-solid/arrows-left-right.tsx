
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=sharp-solid arrows-left-right}
 * @preview ![arrows-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrows-left-right.svg)
 */
const ArrowsLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M486.6 278.6L509.3 256l-22.6-22.6-96-96L368 114.7 322.7 160l22.6 22.6L386.7 224l-261.5 0 41.4-41.4L189.3 160 144 114.7l-22.6 22.6-96 96L2.7 256l22.6 22.6 96 96L144 397.3 189.3 352l-22.6-22.6L125.3 288l261.5 0-41.4 41.4L322.7 352 368 397.3l22.6-22.6 96-96z" />
    </Icon>
);

export default ArrowsLeftRight;
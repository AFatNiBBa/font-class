
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=sharp-light arrows-left-right}
 * @preview ![arrows-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrows-left-right.svg)
 */
const ArrowsLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M499.3 267.3l10.9-10.9-10.4-11.3-96-104-10.9-11.8-23.5 21.7 10.9 11.8L451.5 240 62.6 240l68.7-68.7L142.6 160 120 137.4l-11.3 11.3-96 96L1.4 256l11.3 11.3 96 96L120 374.6 142.6 352l-11.3-11.3L62.6 272l386.7 0-68.7 68.7L369.4 352 392 374.6l11.3-11.3 96-96z" />
    </Icon>
);

export default ArrowsLeftRight;
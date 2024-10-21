
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-arc` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-arc?s=sharp-light arrow-right-to-arc}
 * @preview ![arrow-right-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-right-to-arc.svg)
 */
const ArrowRightToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256C480 132.3 379.7 32 256 32l-16 0 0-32 16 0C397.4 0 512 114.6 512 256s-114.6 256-256 256l-16 0 0-32 16 0c123.7 0 224-100.3 224-224zM202.6 116l144 128 13.5 12-13.5 12-144 128-12 10.6-21.3-23.9 12-10.6L293.9 272 16 272 0 272l0-32 16 0 277.9 0L181.4 140l-12-10.6 21.3-23.9 12 10.6z" />
    </Icon>
);

export default ArrowRightToArc;
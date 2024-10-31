
import { Icon } from "../../index";

/**
 * A component that renders the `ring-diamond` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring-diamond?s=sharp-light ring-diamond}
 * @preview ![ring-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ring-diamond.svg)
 */
const RingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M161.6 128L125.2 70.9 146.8 32l90.3 0 21.6 38.9L222.4 128 192 128l-30.4 0zm92.3 10.2L296 72 256 0 128 0 88 72l42.1 66.2C54.4 163.9 0 235.6 0 320C0 426 86 512 192 512s192-86 192-192c0-84.4-54.4-156.1-130.1-181.8zM192 480a160 160 0 1 1 0-320 160 160 0 1 1 0 320z" />
    </Icon>
);

export default RingDiamond;
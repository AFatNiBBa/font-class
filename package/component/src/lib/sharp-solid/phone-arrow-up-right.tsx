
import { Icon } from "../../index";

/**
 * A component that renders the `phone-arrow-up-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-up-right?s=sharp-solid phone-arrow-up-right}
 * @preview ![phone-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-arrow-up-right.svg)
 */
const PhoneArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 0L0 32 0 64C0 311.4 200.6 512 448 512l32 0 32-144L368 288l-67 83.8C232.5 335.7 176.3 279.5 140.2 211L224 144 144 0zM303 175l-17 17L320 225.9l17-17 127-127 0 46.1 0 24 48 0 0-24 0-104 0-24L488 0 384 0 360 0l0 48 24 0 46.1 0L303 175z" />
    </Icon>
);

export default PhoneArrowUpRight;
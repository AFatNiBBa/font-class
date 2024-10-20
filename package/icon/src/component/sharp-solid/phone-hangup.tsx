
import { Icon } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=sharp-solid phone-hangup}
 * @preview ![phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-hangup.svg)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 240L64 384l160-32V224c62.3-20.8 129.7-20.8 192 0V352l160 32 64-144C602.7 192 486.4 96 320 96S37.3 192 0 240z" />
    </Icon>
);

export default PhoneHangup;
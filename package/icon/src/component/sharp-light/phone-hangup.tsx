
import { Icon } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=sharp-light phone-hangup}
 * @preview ![phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/phone-hangup.svg)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 264l0 96 160 32 64-144c-37.3-48-153.6-144-320-144S37.3 200 0 248L64 392l160-32 0-96c62.3-20.8 129.7-20.8 192 0zM192 333.8L82.8 355.6 37.5 253.5C80.3 208.3 181.3 136 320 136s239.7 72.3 282.5 117.5L557.2 355.6 448 333.8l0-69.8 0-23.1-21.9-7.3c-68.9-23-143.4-23-212.2 0L192 240.9l0 23.1 0 69.8z" />
    </Icon>
);

export default PhoneHangup;
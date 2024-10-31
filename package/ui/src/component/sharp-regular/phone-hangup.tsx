
import { Icon } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=sharp-regular phone-hangup}
 * @preview ![phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/phone-hangup.svg)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 272l0 96 160 32 64-160C602.7 192 486.4 96 320 96S37.3 192 0 240L64 400l160-32 0-96c62.3-20.8 129.7-20.8 192 0zM176 328.6L93.7 345.1 55.6 249.9C99.2 207.1 193.2 144 320 144s220.8 63.1 264.4 105.9l-38.1 95.2L464 328.6l0-56.6 0-34.6-32.8-10.9c-72.2-24.1-150.2-24.1-222.4 0L176 237.4l0 34.6 0 56.6z" />
    </Icon>
);

export default PhoneHangup;
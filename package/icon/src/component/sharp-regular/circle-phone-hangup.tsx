
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone-hangup` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-hangup?s=sharp-regular circle-phone-hangup}
 * @preview ![circle-phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-phone-hangup.svg)
 */
const CirclePhoneHangup: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM378.7 304L416 246.8l-10.7-10.4c-82.5-80.5-216.2-80.5-298.7 0L96 246.8 133.3 304 208 283.2l-5.6-49.1c34.9-10.5 72.3-10.5 107.2 0L304 283.2 378.7 304z" />
    </Icon>
);

export default CirclePhoneHangup;
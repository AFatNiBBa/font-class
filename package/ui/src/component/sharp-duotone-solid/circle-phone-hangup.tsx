
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-phone-hangup` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-hangup?s=sharp-duotone-solid circle-phone-hangup}
 * @preview ![circle-phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-phone-hangup.svg)
 */
const CirclePhoneHangup: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96 6.8l10.7-10.4C147.9 212.1 201.9 192 256 192s108.1 20.1 149.3 60.4L416 262.8 378.7 320 304 299.2l5.6-49.1c-34.9-10.5-72.3-10.5-107.2 0l5.6 49.1L133.3 320 96 262.8z" />
        <path d="M416 262.8L378.7 320 304 299.2l5.6-49.1c-34.9-10.5-72.3-10.5-107.2 0l5.6 49.1L133.3 320 96 262.8l10.7-10.4c82.5-80.5 216.2-80.5 298.7 0L416 262.8z" />
    </Icon>
);

export default CirclePhoneHangup;
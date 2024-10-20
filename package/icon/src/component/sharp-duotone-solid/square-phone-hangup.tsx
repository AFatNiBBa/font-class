
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-phone-hangup` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone-hangup?s=sharp-duotone-solid square-phone-hangup}
 * @preview ![square-phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-phone-hangup.svg)
 */
const SquarePhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 262.8l10.7-10.4C115.9 212.1 169.9 192 224 192s108.1 20.1 149.3 60.4L384 262.8 346.7 320 272 299.2l5.6-49.1c-34.9-10.5-72.3-10.5-107.2 0l5.6 49.1L101.3 320 64 262.8z" />
        <path d="M384 262.8L346.7 320 272 299.2l5.6-49.1c-34.9-10.5-72.3-10.5-107.2 0l5.6 49.1L101.3 320 64 262.8l10.7-10.4c82.5-80.5 216.2-80.5 298.7 0L384 262.8z" />
    </Icon>
);

export default SquarePhoneHangup;
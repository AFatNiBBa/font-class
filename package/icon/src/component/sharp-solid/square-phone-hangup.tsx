
import { Icon } from "../../index";

/**
 * A component that renders the `square-phone-hangup` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone-hangup?s=sharp-solid square-phone-hangup}
 * @preview ![square-phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-phone-hangup.svg)
 */
const SquarePhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM346.7 320L272 299.2l5.6-49.1c-34.9-10.5-72.3-10.5-107.2 0l5.6 49.1L101.3 320 64 262.8l10.7-10.4c82.5-80.5 216.2-80.5 298.7 0L384 262.8 346.7 320z" />
    </Icon>
);

export default SquarePhoneHangup;
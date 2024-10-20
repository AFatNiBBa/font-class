
import { Icon } from "../../index";

/**
 * A component that renders the `phone-intercom` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-intercom?s=sharp-regular phone-intercom}
 * @preview ![phone-intercom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/phone-intercom.svg)
 */
const PhoneIntercom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 80l0 352-80 0L48 80l80 0zM48 480l80 0 48 0 288 0 48 0 0-48 0-352 0-48-48 0L176 32l-48 0L48 32 0 32 0 80 0 432l0 48 48 0zm128-48l0-352 288 0 0 352-288 0zm80-48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm80-96l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zm0 64l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zm96-240l-224 0 0 128 224 0 0-128z" />
    </Icon>
);

export default PhoneIntercom;
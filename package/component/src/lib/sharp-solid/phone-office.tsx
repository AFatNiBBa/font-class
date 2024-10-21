
import { Icon } from "../../index";

/**
 * A component that renders the `phone-office` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-office?s=sharp-solid phone-office}
 * @preview ![phone-office](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-office.svg)
 */
const PhoneOffice: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 0L96 0l0 32 0 352 0 32 32 0 64 0 32 0 0-32 0-352 0-32zM64 32L0 32 0 512l576 0 0-480L256 32l0 384 0 32-32 0L96 448l-32 0 0-32L64 32zM320 96l192 0 0 96-192 0 0-96zm64 160l0 64-64 0 0-64 64 0zm64 0l64 0 0 64-64 0 0-64zm64 128l0 64-64 0 0-64 64 0zm-192 0l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default PhoneOffice;
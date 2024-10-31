
import { Icon } from "../../index";

/**
 * A component that renders the `phone-intercom` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-intercom?s=sharp-solid phone-intercom}
 * @preview ![phone-intercom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-intercom.svg)
 */
const PhoneIntercom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 32l0 448L0 480 0 32l128 0zm32 0l352 0 0 448-352 0 0-448zM320 368a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm48-48l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zm0 64l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zM224 96l0 160 224 0 0-160L224 96z" />
    </Icon>
);

export default PhoneIntercom;
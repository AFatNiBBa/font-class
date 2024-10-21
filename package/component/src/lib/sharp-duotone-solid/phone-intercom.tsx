
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-intercom` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-intercom?s=sharp-duotone-solid phone-intercom}
 * @preview ![phone-intercom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/phone-intercom.svg)
 */
const PhoneIntercom: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 32l0 448 352 0 0-448L160 32zm64 64l224 0 0 160-224 0 0-160zm96 272a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm32-48l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32zm0 64l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32z" />
        <path d="M128 32L0 32 0 480l128 0 0-448zM368 320l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zm0 64l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0z" />
    </Icon>
);

export default PhoneIntercom;
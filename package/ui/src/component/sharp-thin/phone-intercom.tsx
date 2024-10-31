
import { Icon } from "../../index";

/**
 * A component that renders the `phone-intercom` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-intercom?s=sharp-thin phone-intercom}
 * @preview ![phone-intercom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/phone-intercom.svg)
 */
const PhoneIntercom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 48l0 416-96 0L16 48l96 0zM16 32L0 32 0 48 0 464l0 16 16 0 96 0 16 0 0-16 0-416 0-16-16 0L16 32zM496 48l0 416-320 0 0-416 320 0zM176 32l-16 0 0 16 0 416 0 16 16 0 320 0 16 0 0-16 0-416 0-16-16 0L176 32zm64 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm32-32l0 16 8 0 80 0 8 0 0-16-8 0-80 0-8 0zm0 48l0 16 8 0 80 0 8 0 0-16-8 0-80 0-8 0zM240 112l192 0 0 128-192 0 0-128zM224 96l0 16 0 128 0 16 16 0 192 0 16 0 0-16 0-128 0-16-16 0L240 96l-16 0z" />
    </Icon>
);

export default PhoneIntercom;
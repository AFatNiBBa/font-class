
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mailbox-flag-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox-flag-up?s=sharp-duotone-solid mailbox-flag-up}
 * @preview ![mailbox-flag-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mailbox-flag-up.svg)
 */
const MailboxFlagUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144 64c79.5 0 144 64.5 144 144l0 240 288 0 0-240c0-56.5-32.6-105.5-80-129l0 17 0 16-16 0-64 0 0 96 0 16-32 0 0-16 0-112 0-32L144 64z" />
        <path d="M384 224l0-16 0-112 0-48 0-16 16 0 80 0 16 0 0 16 0 48 0 16-16 0-64 0 0 96 0 16-32 0zM0 208C0 128.5 64.5 64 144 64s144 64.5 144 144l0 240L0 448 0 208zm64-16l0 32 16 0 128 0 16 0 0-32-16 0L80 192l-16 0z" />
    </Icon>
);

export default MailboxFlagUp;
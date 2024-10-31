
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mailbox-flag-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox-flag-up?s=duotone mailbox-flag-up}
 * @preview ![mailbox-flag-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mailbox-flag-up.svg)
 */
const MailboxFlagUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144 64c79.5 0 144 64.5 144 144l0 176c0 35.3-28.7 64-64 64l288 0c35.3 0 64-28.7 64-64l0-176c0-56.5-32.6-105.5-80-129l0 17c0 8.8-7.2 16-16 16l-64 0 0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112 0-32L144 64z" />
        <path d="M400 224c-8.8 0-16-7.2-16-16l0-112 0-48c0-8.8 7.2-16 16-16l80 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-64 0 0 96c0 8.8-7.2 16-16 16zM0 208C0 128.5 64.5 64 144 64s144 64.5 144 144l0 176c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 208zm64 0c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 192c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default MailboxFlagUp;
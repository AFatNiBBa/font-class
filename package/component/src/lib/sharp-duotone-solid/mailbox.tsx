
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=sharp-duotone-solid mailbox}
 * @preview ![mailbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mailbox.svg)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144 64c79.5 0 144 64.5 144 144l0 240 288 0 0-240c0-79.5-64.5-144-144-144L144 64zM384 192l16 0 64 0 32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-48-48 0-16 0 0-32z" />
        <path d="M0 208C0 128.5 64.5 64 144 64s144 64.5 144 144l0 240L0 448 0 208zm64-16l0 32 16 0 128 0 16 0 0-32-16 0L80 192l-16 0zm336 0l64 0 32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-48-48 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Mailbox;
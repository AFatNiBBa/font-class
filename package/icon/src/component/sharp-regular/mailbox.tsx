
import { Icon } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=sharp-regular mailbox}
 * @preview ![mailbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mailbox.svg)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 208c0-53 43-96 96-96s96 43 96 96l0 192L48 400l0-192zM240 448l48 0 240 0 48 0 0-48 0-192c0-79.5-64.5-144-144-144L144 64C64.5 64 0 128.5 0 208L0 400l0 48 48 0 192 0zm48-240c0-36.9-13.9-70.5-36.7-96L432 112c53 0 96 43 96 96l0 192-240 0 0-192zM104 192l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-80 0zm256 0l-24 0 0 48 24 0 56 0 0 24 0 24 24 0 16 0 24 0 0-24 0-48 0-24-24 0-16 0-80 0z" />
    </Icon>
);

export default Mailbox;
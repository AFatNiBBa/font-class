
import { Icon } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=sharp-solid mailbox}
 * @preview ![mailbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mailbox.svg)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 208L0 448l288 0 0-240c0-79.5-64.5-144-144-144S0 128.5 0 208zm64-16l16 0 128 0 16 0 0 32-16 0L80 224l-16 0 0-32zM320 448l256 0 0-240c0-79.5-64.5-144-144-144L245.2 64C290.4 95.9 320 148.5 320 208l0 240zm64-256l16 0 64 0 32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-48-48 0-16 0 0-32z" />
    </Icon>
);

export default Mailbox;

import { Icon } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=solid mailbox}
 * @preview ![mailbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mailbox.svg)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 208L0 384c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-176c0-79.5-64.5-144-144-144S0 128.5 0 208zm64 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 224c-8.8 0-16-7.2-16-16zm256 0l0 176c0 24.6-9.2 47-24.4 64L512 448c35.3 0 64-28.7 64-64l0-176c0-79.5-64.5-144-144-144L245.2 64C290.4 95.9 320 148.5 320 208zm64 0c0-8.8 7.2-16 16-16l64 0 32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Mailbox;
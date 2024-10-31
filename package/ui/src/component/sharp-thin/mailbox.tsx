
import { Icon } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=sharp-thin mailbox}
 * @preview ![mailbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mailbox.svg)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272 432L16 432l0-224C16 137.3 73.3 80 144 80s128 57.3 128 128l0 224zm16-224c0-55.7-31.7-104.1-78-128l222 0c70.7 0 128 57.3 128 128l0 224-272 0 0-224zM272 448l16 0 272 0 16 0 0-16 0-224c0-79.5-64.5-144-144-144L144 64C64.5 64 0 128.5 0 208L0 432l0 16 16 0 256 0zM72 192l-8 0 0 16 8 0 144 0 8 0 0-16-8 0L72 192zm304 0l-8 0 0 16 8 0 56 0 0 80 0 8 8 0 64 0 8 0 0-8 0-88 0-8-8 0-64 0-64 0zm72 88l0-72 48 0 0 72-48 0z" />
    </Icon>
);

export default Mailbox;
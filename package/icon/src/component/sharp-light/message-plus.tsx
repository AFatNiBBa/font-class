
import { Icon } from "../../index";

/**
 * A component that renders the `message-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-plus?s=sharp-light message-plus}
 * @preview ![message-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-plus.svg)
 */
const MessagePlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zM272 112l0 16 0 64 64 0 16 0 0 32-16 0-64 0 0 64 0 16-32 0 0-16 0-64-64 0-16 0 0-32 16 0 64 0 0-64 0-16 32 0z" />
    </Icon>
);

export default MessagePlus;
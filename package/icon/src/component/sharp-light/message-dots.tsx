
import { Icon } from "../../index";

/**
 * A component that renders the `message-dots` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-dots?s=sharp-light message-dots}
 * @preview ![message-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-dots.svg)
 */
const MessageDots: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zM128 184a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm128 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm104 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default MessageDots;
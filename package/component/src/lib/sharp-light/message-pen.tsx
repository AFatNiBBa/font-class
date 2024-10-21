
import { Icon } from "../../index";

/**
 * A component that renders the `message-pen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-pen?s=sharp-light message-pen}
 * @preview ![message-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-pen.svg)
 */
const MessagePen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zM294.1 157.3L281 170.4l12.5 12.5 13.1-13.1-12.5-12.5zm-93.4 93.4l-2.3 14.8 14.8-2.3 57.7-57.7L258.4 193l-57.7 57.7zM329.3 147.2l22.6 22.6-22.6 22.6L228.4 293.2l-35.3 5.5L160 303.9l5.2-33.2 5.5-35.2L294.1 112l35.2 35.2z" />
    </Icon>
);

export default MessagePen;
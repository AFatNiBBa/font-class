
import { Icon } from "../../index";

/**
 * A component that renders the `message-pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-pen?s=sharp-solid message-pen}
 * @preview ![message-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-pen.svg)
 */
const MessagePen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM304.8 112l-29.1 29.1L323 188.4l29.1-29.1L304.8 112zm-51.7 51.7l-85.2 85.2L160 304.1l55.3-7.9L300.4 211l-47.3-47.3z" />
    </Icon>
);

export default MessagePen;
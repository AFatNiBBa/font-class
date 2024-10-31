
import { Icon } from "../../index";

/**
 * A component that renders the `message-pen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-pen?s=sharp-regular message-pen}
 * @preview ![message-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message-pen.svg)
 */
const MessagePen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 512l48-32 96-64 160 0 48 0 0-48 0-320 0-48L464 0 48 0 0 0 0 48 0 368l0 48 48 0 64 0 48 0 0 38.3 0 9.7 0 48zM277.4 376.1L208 422.3l0-6.3 0-48-48 0L48 368 48 48l416 0 0 320-160 0-14.5 0-12.1 8.1zm27.4-264l-29.1 29.1L323 188.4l29.1-29.1L304.8 112zm-51.7 51.7l-85.2 85.2L160 304.1l55.3-7.9L300.4 211l-47.3-47.3z" />
    </Icon>
);

export default MessagePen;
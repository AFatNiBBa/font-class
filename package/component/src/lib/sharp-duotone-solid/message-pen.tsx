
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-pen?s=sharp-duotone-solid message-pen}
 * @preview ![message-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-pen.svg)
 */
const MessagePen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM160 304.1l55.3-7.9L300.4 211l-47.3-47.3-85.2 85.2L160 304.1zM275.7 141.1L323 188.4l29.1-29.1L304.8 112l-29.1 29.1z" />
        <path d="M352.1 159.4L304.8 112l-29.1 29.1L323 188.4l29.1-29.1zM300.4 211l-47.3-47.3-85.2 85.2L160 304.1l55.3-7.9L300.4 211z" />
    </Icon>
);

export default MessagePen;
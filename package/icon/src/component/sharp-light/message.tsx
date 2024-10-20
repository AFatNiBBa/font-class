
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=sharp-light message}
 * @preview ![message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message.svg)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 416l32 0 0 32 0 25.5 0 38.5 32-21.3L304 416l176 0 32 0 0-32 0-352 0-32L480 0 32 0 0 0 0 32 0 384l0 32 32 0 96 0zM32 384L32 32l448 0 0 352-176 0-9.7 0-8.1 5.4L192 452.2l0-36.2 0-32-32 0L32 384z" />
    </Icon>
);

export default Message;
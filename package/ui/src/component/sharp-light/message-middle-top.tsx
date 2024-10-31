
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle-top` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle-top?s=sharp-light message-middle-top}
 * @preview ![message-middle-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-middle-top.svg)
 */
const MessageMiddleTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M173.7 96L32 96 0 96l0 32L0 480l0 32 32 0 448 0 32 0 0-32 0-352 0-32-32 0L338.3 96 277.1 24.6 256 0 234.9 24.6 173.7 96zM256 49.2l58 67.7 9.6 11.2 14.7 0L480 128l0 352L32 480l0-352 141.7 0 14.7 0 9.6-11.2 58-67.7z" />
    </Icon>
);

export default MessageMiddleTop;
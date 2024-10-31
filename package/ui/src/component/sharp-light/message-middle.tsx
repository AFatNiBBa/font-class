
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=sharp-light message-middle}
 * @preview ![message-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-middle.svg)
 */
const MessageMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M173.7 416L32 416 0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-141.7 0-61.2 71.4L256 512l-21.1-24.6L173.7 416zM256 462.8l58-67.7 9.6-11.2 14.7 0L480 384l0-352L32 32l0 352 141.7 0 14.7 0 9.6 11.2 58 67.7z" />
    </Icon>
);

export default MessageMiddle;
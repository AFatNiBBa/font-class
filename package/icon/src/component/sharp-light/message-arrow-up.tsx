
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up?s=sharp-light message-arrow-up}
 * @preview ![message-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-arrow-up.svg)
 */
const MessageArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zm112-80l0 16-32 0 0-16 0-153.4-52.7 52.7L176 214.6 153.4 192l11.3-11.3 80-80L256 89.4l11.3 11.3 80 80L358.6 192 336 214.6l-11.3-11.3L272 150.6 272 304z" />
    </Icon>
);

export default MessageArrowUp;
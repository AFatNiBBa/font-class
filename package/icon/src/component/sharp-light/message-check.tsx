
import { Icon } from "../../index";

/**
 * A component that renders the `message-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-check?s=sharp-light message-check}
 * @preview ![message-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-check.svg)
 */
const MessageCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zM363.3 147.3l-128 128L224 286.6l-11.3-11.3-64-64L137.4 200 160 177.4l11.3 11.3L224 241.4 340.7 124.7 352 113.4 374.6 136l-11.3 11.3z" />
    </Icon>
);

export default MessageCheck;
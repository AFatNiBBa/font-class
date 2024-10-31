
import { Icon } from "../../index";

/**
 * A component that renders the `message-text` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-text?s=sharp-thin message-text}
 * @preview ![message-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-text.svg)
 */
const MessageText: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-16 0L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-192 0L176 501.3 160 512l0-19.2 0-60.8 0-16zm0-16l16 0 0 16 0 66.1 119.1-79.4 4-2.7 4.8 0 192 0 0-384L16 16l0 384 144 0zm8-256l88 0 88 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0 0 136c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-136-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default MessageText;
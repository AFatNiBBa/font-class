
import { Icon } from "../../index";

/**
 * A component that renders the `message-smile` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-smile?s=sharp-light message-smile}
 * @preview ![message-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-smile.svg)
 */
const MessageSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zm32-248a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm128 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM167.8 241.4l10.7 11.9C197.5 274.6 225.2 288 256 288s58.5-13.4 77.5-34.7l10.7-11.9L368 262.7l-10.7 11.9C332.5 302.5 296.3 320 256 320s-76.5-17.5-101.4-45.3L144 262.7l23.8-21.3z" />
    </Icon>
);

export default MessageSmile;
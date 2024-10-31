
import { Icon } from "../../index";

/**
 * A component that renders the `message-bot` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-bot?s=solid message-bot}
 * @preview ![message-bot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/message-bot.svg)
 */
const MessageBot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 0C124.7 0 96 28.7 96 64l0 112-36.3 0c-5.5-9.6-15.9-16-27.7-16c-17.7 0-32 14.3-32 32s14.3 32 32 32c11.8 0 22.2-6.4 27.7-16L96 208l0 144c0 35.3 28.7 64 64 64l64 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L373.3 416 480 416c35.3 0 64-28.7 64-64l0-144 36.3 0c5.5 9.6 15.9 16 27.7 16c17.7 0 32-14.3 32-32s-14.3-32-32-32c-11.8 0-22.2 6.4-27.7 16L544 176l0-112c0-35.3-28.7-64-64-64L160 0zm0 128c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-128zm64 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default MessageBot;
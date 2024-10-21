
import { Icon } from "../../index";

/**
 * A component that renders the `message-quote` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-quote?s=sharp-light message-quote}
 * @preview ![message-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-quote.svg)
 */
const MessageQuote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zm0-240l0 48 48 0 0-16 0-16 0-16-48 0zm48 80l-48 0-32 0 0-32 0-48 0-32 32 0 48 0 32 0 0 32 0 16 0 16 0 16 0 32 0 40 0 11.1L229.6 279l-64 24-15 5.6-11.2-30 15-5.6L208 252.9l0-28.9zm176 0l0 40 0 11.1L373.6 279l-64 24-15 5.6-11.2-30 15-5.6L352 252.9l0-28.9-48 0-32 0 0-32 0-48 0-32 32 0 48 0 32 0 0 32 0 16 0 16 0 16 0 32zm-32-48l0-16 0-16-48 0 0 48 48 0 0-16z" />
    </Icon>
);

export default MessageQuote;
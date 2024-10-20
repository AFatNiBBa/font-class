
import { Icon } from "../../index";

/**
 * A component that renders the `message-quote` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-quote?s=sharp-solid message-quote}
 * @preview ![message-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-quote.svg)
 */
const MessageQuote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM240 112l-112 0 0 112 64 0 0 32-24 0-24 0 0 48 24 0 48 0 24 0 0-24 0-56 0-48 0-24 0-40zm144 0l-112 0 0 112 64 0 0 32-24 0-24 0 0 48 24 0 48 0 24 0 0-24 0-56 0-48 0-24 0-40z" />
    </Icon>
);

export default MessageQuote;
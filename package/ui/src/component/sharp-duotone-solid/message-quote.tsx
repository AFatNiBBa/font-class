
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-quote` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-quote?s=sharp-duotone-solid message-quote}
 * @preview ![message-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-quote.svg)
 */
const MessageQuote: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM128 112l0 112 64 0 0 32-24 0-24 0 0 48 24 0 48 0 24 0 0-24 0-56 0-48 0-24 0-40-112 0zm144 0l0 112 64 0 0 32-24 0-24 0 0 48 24 0 48 0 24 0 0-24 0-56 0-48 0-24 0-40-112 0z" />
        <path d="M128 112l112 0 0 40 0 24 0 48 0 56 0 24-24 0-48 0-24 0 0-48 24 0 24 0 0-32-64 0 0-112zm144 0l112 0 0 40 0 24 0 48 0 56 0 24-24 0-48 0-24 0 0-48 24 0 24 0 0-32-64 0 0-112z" />
    </Icon>
);

export default MessageQuote;
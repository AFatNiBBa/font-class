
import { Icon } from "../../index";

/**
 * A component that renders the `message-bot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-bot?s=sharp-thin message-bot}
 * @preview ![message-bot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-bot.svg)
 */
const MessageBot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 416l16 0 0 16 0 60.8 0 19.2 16-10.7L368 416l160 0 16 0 0-16 0-200 32 0 0 8 0 16 16 0 32 0 16 0 0-16 0-32 0-16-16 0-32 0-16 0 0 16 0 8-32 0 0-168 0-16L528 0 112 0 96 0l0 16 0 168-32 0 0-8 0-16-16 0-32 0L0 160l0 16 0 32 0 16 16 0 32 0 16 0 0-16 0-8 32 0 0 200 0 16 16 0 96 0zm-96-16l0-384 416 0 0 384-160 0-4.8 0-4 2.7L240 482.1l0-66.1 0-16-16 0-112 0zM160 96l320 0 0 192-320 0 0-192zM144 80l0 16 0 192 0 16 16 0 320 0 16 0 0-16 0-192 0-16-16 0L160 80l-16 0zm80 136a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm-40-24a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm256 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80zm208 24l0 32-32 0 0-32 32 0zM16 176l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default MessageBot;
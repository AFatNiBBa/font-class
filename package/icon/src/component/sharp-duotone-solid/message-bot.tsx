
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-bot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-bot?s=sharp-duotone-solid message-bot}
 * @preview ![message-bot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-bot.svg)
 */
const MessageBot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 0L544 0l0 176 0 32 0 208-176 0L224 512l0-96L96 416l0-208 0-32L96 0zm64 96l0 192 320 0 0-192L160 96z" />
        <path d="M64 160L0 160l0 64 64 0 0-16 32 0 0-32-32 0 0-16zm192 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 16l32 0 0 16 64 0 0-64-64 0 0 16-32 0 0 32z" />
    </Icon>
);

export default MessageBot;
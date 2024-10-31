
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-dots` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-dots?s=sharp-duotone-solid message-dots}
 * @preview ![message-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-dots.svg)
 */
const MessageDots: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM96 208a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm128 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm128 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M96 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default MessageDots;
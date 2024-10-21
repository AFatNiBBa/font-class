
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-text` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-text?s=sharp-duotone-solid message-text}
 * @preview ![message-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-text.svg)
 */
const MessageText: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM144 112l0 48 24 0 64 0 0 136 0 24 48 0 0-24 0-136 64 0 24 0 0-48-24 0-88 0-88 0-24 0z" />
        <path d="M144 112l24 0 88 0 88 0 24 0 0 48-24 0-64 0 0 136 0 24-48 0 0-24 0-136-64 0-24 0 0-48z" />
    </Icon>
);

export default MessageText;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-lines?s=sharp-duotone-solid message-lines}
 * @preview ![message-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-lines.svg)
 */
const MessageLines: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM128 144l0 48 24 0 208 0 24 0 0-48-24 0-208 0-24 0zm0 96l0 48 24 0 112 0 24 0 0-48-24 0-112 0-24 0z" />
        <path d="M128 144l24 0 208 0 24 0 0 48-24 0-208 0-24 0 0-48zm0 96l24 0 112 0 24 0 0 48-24 0-112 0-24 0 0-48z" />
    </Icon>
);

export default MessageLines;
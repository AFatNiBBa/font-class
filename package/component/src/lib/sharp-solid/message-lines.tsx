
import { Icon } from "../../index";

/**
 * A component that renders the `message-lines` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-lines?s=sharp-solid message-lines}
 * @preview ![message-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-lines.svg)
 */
const MessageLines: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM152 144l-24 0 0 48 24 0 208 0 24 0 0-48-24 0-208 0zm0 96l-24 0 0 48 24 0 112 0 24 0 0-48-24 0-112 0z" />
    </Icon>
);

export default MessageLines;
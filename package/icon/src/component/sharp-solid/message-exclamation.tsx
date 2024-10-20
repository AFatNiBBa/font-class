
import { Icon } from "../../index";

/**
 * A component that renders the `message-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-exclamation?s=sharp-solid message-exclamation}
 * @preview ![message-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-exclamation.svg)
 */
const MessageExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM280 80l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM232 272l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default MessageExclamation;
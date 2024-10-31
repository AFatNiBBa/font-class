
import { Icon } from "../../index";

/**
 * A component that renders the `message-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-check?s=sharp-solid message-check}
 * @preview ![message-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-check.svg)
 */
const MessageCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM369 153l17-17L352 102.1l-17 17-111 111-47-47-17-17L126.1 200l17 17 64 64 17 17 17-17L369 153z" />
    </Icon>
);

export default MessageCheck;
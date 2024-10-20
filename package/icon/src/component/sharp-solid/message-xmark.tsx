
import { Icon } from "../../index";

/**
 * A component that renders the `message-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-xmark?s=sharp-solid message-xmark}
 * @preview ![message-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-xmark.svg)
 */
const MessageXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM353.9 144L320 110.1l-17 17-47 47-47-47-17-17L158.1 144l17 17 47 47-47 47-17 17L192 305.9l17-17 47-47 47 47 17 17L353.9 272l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default MessageXmark;
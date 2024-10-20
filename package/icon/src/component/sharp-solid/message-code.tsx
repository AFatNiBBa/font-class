
import { Icon } from "../../index";

/**
 * A component that renders the `message-code` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-code?s=sharp-solid message-code}
 * @preview ![message-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-code.svg)
 */
const MessageCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM217 161l17-17L200 110.1l-17 17-64 64-17 17 17 17 64 64 17 17L233.9 272l-17-17-47-47 47-47zM329 127l-17-17L278.1 144l17 17 47 47-47 47-17 17L312 305.9l17-17 64-64 17-17-17-17-64-64z" />
    </Icon>
);

export default MessageCode;
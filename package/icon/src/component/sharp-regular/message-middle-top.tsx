
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle-top` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle-top?s=sharp-regular message-middle-top}
 * @preview ![message-middle-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message-middle-top.svg)
 */
const MessageMiddleTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M173.7 96L48 96 0 96l0 48L0 464l0 48 48 0 416 0 48 0 0-48 0-320 0-48-48 0L338.3 96 287.6 36.9 256 0 224.4 36.9 173.7 96zM464 144l0 320L48 464l0-320 125.7 0 22.1 0 14.4-16.8L256 73.8l45.8 53.5L316.2 144l22.1 0L464 144z" />
    </Icon>
);

export default MessageMiddleTop;
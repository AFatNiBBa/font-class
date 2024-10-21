
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle-top` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle-top?s=sharp-thin message-middle-top}
 * @preview ![message-middle-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-middle-top.svg)
 */
const MessageMiddleTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M173.7 96L16 96 0 96l0 16L0 496l0 16 16 0 480 0 16 0 0-16 0-384 0-16-16 0L338.3 96 266.5 12.3 256 0 245.5 12.3 173.7 96zM256 24.6l70.1 81.8 4.8 5.6 7.4 0L496 112l0 384L16 496l0-384 157.7 0 7.4 0 4.8-5.6L256 24.6z" />
    </Icon>
);

export default MessageMiddleTop;
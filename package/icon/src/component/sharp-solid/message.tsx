
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=sharp-solid message}
 * @preview ![message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message.svg)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0L0 0 0 416l160 0 0 96 144-96 208 0L512 0z" />
    </Icon>
);

export default Message;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `message` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=sharp-duotone-solid message}
 * @preview ![message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message.svg)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 0L0 0 0 416l160 0 0 96 144-96 208 0L512 0z" />
    </Icon>
);

export default Message;
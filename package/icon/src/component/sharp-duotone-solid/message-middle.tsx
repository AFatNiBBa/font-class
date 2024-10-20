
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=sharp-duotone-solid message-middle}
 * @preview ![message-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-middle.svg)
 */
const MessageMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M338.3 416L512 416 512 0 0 0 0 416l173.7 0L256 512l82.3-96z" />
    </Icon>
);

export default MessageMiddle;
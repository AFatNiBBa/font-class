
import { Icon, generic } from "../../index";

/**
 * A component that renders the `messages` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=sharp-duotone-solid messages}
 * @preview ![messages](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/messages.svg)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 352l0 96 181.3 0L544 512l0-64 96 0 0-320-192 0 0 224-192 0z" />
        <path d="M416 0L0 0 0 320l96 0 0 64 106.7-64L416 320 416 0z" />
    </Icon>
);

export default Messages;

import { Icon } from "../../index";

/**
 * A component that renders the `messages` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=sharp-solid messages}
 * @preview ![messages](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/messages.svg)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L416 0l0 320-213.3 0L96 384l0-64L0 320 0 0zM256 448l0-96 192 0 0-224 192 0 0 320-96 0 0 64L437.3 448 256 448z" />
    </Icon>
);

export default Messages;
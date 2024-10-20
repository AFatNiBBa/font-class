
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=sharp-thin message}
 * @preview ![message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message.svg)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 416l16 0 0 16 0 60.8 0 19.2 16-10.7L304 416l192 0 16 0 0-16 0-384 0-16L496 0 16 0 0 0 0 16 0 400l0 16 16 0 128 0zM16 400L16 16l480 0 0 384-192 0-4.8 0-4 2.7L176 482.1l0-66.1 0-16-16 0L16 400z" />
    </Icon>
);

export default Message;
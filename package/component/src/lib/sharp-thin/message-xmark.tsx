
import { Icon } from "../../index";

/**
 * A component that renders the `message-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-xmark?s=sharp-thin message-xmark}
 * @preview ![message-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-xmark.svg)
 */
const MessageXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-16 0L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-192 0L176 501.3 160 512l0-19.2 0-60.8 0-16zm0-16l16 0 0 16 0 66.1 119.1-79.4 4-2.7 4.8 0 192 0 0-384L16 16l0 384 144 0zm25.8-273.5l5.7 5.7L256 196.7l64.6-64.6 5.7-5.7 11.3 11.3-5.7 5.7L267.3 208l64.6 64.6 5.7 5.7-11.3 11.3-5.7-5.7L256 219.3l-64.6 64.6-5.7 5.7-11.3-11.3 5.7-5.7L244.7 208l-64.6-64.6-5.7-5.7 11.3-11.3z" />
    </Icon>
);

export default MessageXmark;
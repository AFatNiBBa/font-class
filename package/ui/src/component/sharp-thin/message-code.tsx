
import { Icon } from "../../index";

/**
 * A component that renders the `message-code` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-code?s=sharp-thin message-code}
 * @preview ![message-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-code.svg)
 */
const MessageCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-16 0L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-192 0L176 501.3 160 512l0-19.2 0-60.8 0-16zm0-16l16 0 0 16 0 66.1 119.1-79.4 4-2.7 4.8 0 192 0 0-384L16 16l0 384 144 0zm53.7-258.3L147.3 208l66.3 66.3 5.7 5.7L208 291.3l-5.7-5.7-72-72-5.7-5.7 5.7-5.7 72-72 5.7-5.7L219.3 136l-5.7 5.7zm96-11.3l72 72 5.7 5.7-5.7 5.7-72 72-5.7 5.7L292.7 280l5.7-5.7L364.7 208l-66.3-66.3-5.7-5.7L304 124.7l5.7 5.7z" />
    </Icon>
);

export default MessageCode;
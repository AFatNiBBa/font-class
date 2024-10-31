
import { Icon } from "../../index";

/**
 * A component that renders the `message-code` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-code?s=sharp-light message-code}
 * @preview ![message-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-code.svg)
 */
const MessageCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zm59.3-228.7L166.6 208l52.7 52.7L230.6 272 208 294.6l-11.3-11.3-64-64L121.4 208l11.3-11.3 64-64L208 121.4 230.6 144l-11.3 11.3zm96-22.6l64 64L390.6 208l-11.3 11.3-64 64L304 294.6 281.4 272l11.3-11.3L345.4 208l-52.7-52.7L281.4 144 304 121.4l11.3 11.3z" />
    </Icon>
);

export default MessageCode;
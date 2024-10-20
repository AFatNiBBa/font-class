
import { Icon } from "../../index";

/**
 * A component that renders the `message-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-slash?s=sharp-regular message-slash}
 * @preview ![message-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message-slash.svg)
 */
const MessageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M272 480l-48 32 0-48 0-9.7 0-38.3-48 0-64 0-48 0 0-48 0-221.6 48 37.8L112 368l112 0 48 0 0 48 0 6.3 69.4-46.2L349 371l57.1 45L368 416l-96 64zM112 64.2L503.3 368l24.7 0 0-320L112 48l0 16.2zM64 26.9L64 0l48 0L528 0l48 0 0 48 0 320 0 48-10.8 0 55.8 43.3 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7L64 26.9z" />
    </Icon>
);

export default MessageSlash;
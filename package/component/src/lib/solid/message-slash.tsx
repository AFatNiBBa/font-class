
import { Icon } from "../../index";

/**
 * A component that renders the `message-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-slash?s=solid message-slash}
 * @preview ![message-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/message-slash.svg)
 */
const MessageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-82.3-64.5C565.1 393 576 373.8 576 352l0-288c0-35.3-28.7-64-64-64L128 0C104.4 0 83.8 12.7 72.7 31.7L38.8 5.1zM406.2 416L64 146.4 64 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L373.3 416l32.8 0z" />
    </Icon>
);

export default MessageSlash;
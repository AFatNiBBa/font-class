
import { Icon } from "../../index";

/**
 * A component that renders the `message-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-slash?s=sharp-solid message-slash}
 * @preview ![message-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-slash.svg)
 */
const MessageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M565.2 416l10.8 0L576 0 64 0l0 26.9L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L565.2 416zm-159 0L64 146.4 64 416l160 0 0 96 144-96 38.2 0z" />
    </Icon>
);

export default MessageSlash;
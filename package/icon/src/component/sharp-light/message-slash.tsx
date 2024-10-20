
import { Icon } from "../../index";

/**
 * A component that renders the `message-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-slash?s=sharp-light message-slash}
 * @preview ![message-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-slash.svg)
 */
const MessageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 32l0-32L544 0 99 0l40.5 32L544 32l0 319.3 32 25.3L576 32zM64 135.4L64 384l0 32 32 0 96 0 32 0 0 32 0 25.5 0 38.5 32-21.3L368 416l51.4 0-40.5-32L368 384l-9.7 0-8.1 5.4L256 452.2l0-36.2 0-32-32 0L96 384l0-223.3L64 135.4zM40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18z" />
    </Icon>
);

export default MessageSlash;

import { Icon } from "../../index";

/**
 * A component that renders the `messages` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=sharp-light messages}
 * @preview ![messages](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/messages.svg)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 384l32-16 96-48 160 0 32 0 0-32 0-256 0-32L384 0 32 0 0 0 0 32 0 288l0 32 32 0 32 0 32 0 0 28.2 0 3.8 0 32zm113.7-92.6L128 332.2l0-12.2 0-32-32 0-64 0L32 32l352 0 0 256-160 0-7.6 0-6.8 3.4zM256 448l32 0 128 0 96 48 32 16 0-32 0-3.8 0-28.2 32 0 32 0 32 0 0-32 0-256 0-32-32 0-160 0 0 32 160 0 0 256-64 0-32 0 0 32 0 12.2-81.7-40.8-6.8-3.4-7.6 0-128 0 0-64-32 0 0 64 0 32z" />
    </Icon>
);

export default Messages;

import { Icon } from "../../index";

/**
 * A component that renders the `message-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-slash?s=sharp-thin message-slash}
 * @preview ![message-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-slash.svg)
 */
const MessageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 16l0-16L560 0 111.9 0l20.3 16L560 16l0 337.7 16 12.6L576 16zM64 145.6L64 400l0 16 16 0 128 0 16 0 0 16 0 60.8 0 19.2 16-10.7L368 416l38.5 0-20.3-16L368 400l-4.8 0-4 2.7L240 482.1l0-66.1 0-16-16 0L80 400l0-241.7L64 145.6zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default MessageSlash;
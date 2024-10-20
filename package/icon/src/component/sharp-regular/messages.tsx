
import { Icon } from "../../index";

/**
 * A component that renders the `messages` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=sharp-regular messages}
 * @preview ![messages](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/messages.svg)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 384l48-24 80-40 144 0 48 0 0-48 0-224 0-48L368 0 48 0 0 0 0 48 0 272l0 48 48 0 48 0 0 10.3L96 368l0 16zM202.5 277.1L144 306.3l0-34.3-48 0-48 0L48 48l320 0 0 224-144 0-11.3 0-10.1 5.1zM256 400l0 48 48 0 112 0 80 40 48 24 0-16 0-37.7 0-10.3 48 0 48 0 0-48 0-224 0-48-48 0-144 0 0 48 144 0 0 224-48 0-48 0 0 34.3-58.5-29.3L427.3 400 416 400l-112 0 0-48-48 0 0 48z" />
    </Icon>
);

export default Messages;
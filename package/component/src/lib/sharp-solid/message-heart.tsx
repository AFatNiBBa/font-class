
import { Icon } from "../../index";

/**
 * A component that renders the `message-heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-heart?s=sharp-solid message-heart}
 * @preview ![message-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-heart.svg)
 */
const MessageHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM368 171.2c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0c-32.7 0-59.2 26.5-59.2 59.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L256 304.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7z" />
    </Icon>
);

export default MessageHeart;
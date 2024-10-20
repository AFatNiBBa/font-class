
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-up-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up-right?s=sharp-solid message-arrow-up-right}
 * @preview ![message-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-arrow-up-right.svg)
 */
const MessageArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM200 128l-24 0 0 48 24 0 54.1 0-87 87-17 17L184 313.9l17-17 87-87 0 54.1 0 24 48 0 0-24 0-112 0-24-24 0-112 0z" />
    </Icon>
);

export default MessageArrowUpRight;
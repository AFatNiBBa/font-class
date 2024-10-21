
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-up-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up-right?s=sharp-light message-arrow-up-right}
 * @preview ![message-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-arrow-up-right.svg)
 */
const MessageArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zm32-256l128 0 16 0 0 16 0 128 0 16-32 0 0-16 0-89.4L195.3 291.3 184 302.6 161.4 280l11.3-11.3L281.4 160 192 160l-16 0 0-32 16 0z" />
    </Icon>
);

export default MessageArrowUpRight;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-arrow-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up-right?s=sharp-duotone-solid message-arrow-up-right}
 * @preview ![message-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-arrow-up-right.svg)
 */
const MessageArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM150.1 280L184 313.9l17-17 87-87 0 54.1 0 24 48 0 0-24 0-112 0-24-24 0-112 0-24 0 0 48 24 0 54.1 0-87 87-17 17z" />
        <path d="M176 128l24 0 112 0 24 0 0 24 0 112 0 24-48 0 0-24 0-54.1-87 87-17 17L150.1 280l17-17 87-87L200 176l-24 0 0-48z" />
    </Icon>
);

export default MessageArrowUpRight;
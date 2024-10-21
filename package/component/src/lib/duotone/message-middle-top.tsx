
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-middle-top` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle-top?s=duotone message-middle-top}
 * @preview ![message-middle-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-middle-top.svg)
 */
const MessageMiddleTop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M343.5 96L448 96c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l104.5 0L243.7 5.8c3-3.6 7.5-5.8 12.3-5.8s9.3 2.1 12.3 5.8L343.5 96z" />
    </Icon>
);

export default MessageMiddleTop;
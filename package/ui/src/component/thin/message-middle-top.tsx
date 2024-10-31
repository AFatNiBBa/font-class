
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle-top` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle-top?s=thin message-middle-top}
 * @preview ![message-middle-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message-middle-top.svg)
 */
const MessageMiddleTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M343.5 112L448 112c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l104.5 0c4.7 0 9.3-2.1 12.3-5.8L256 16l75.2 90.2c3 3.6 7.5 5.8 12.3 5.8zm-175-16L64 96C28.7 96 0 124.7 0 160L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L343.5 96 268.3 5.8C265.3 2.1 260.7 0 256 0s-9.3 2.1-12.3 5.8L168.5 96z" />
    </Icon>
);

export default MessageMiddleTop;
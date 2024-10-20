
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle-top` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle-top?s=regular message-middle-top}
 * @preview ![message-middle-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/message-middle-top.svg)
 */
const MessageMiddleTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M343.5 144L448 144c8.8 0 16 7.2 16 16l0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-288c0-8.8 7.2-16 16-16l104.5 0c14.2 0 27.8-6.3 36.9-17.3L256 66l50.6 60.7c9.1 10.9 22.6 17.3 36.9 17.3zm-175-48L64 96C28.7 96 0 124.7 0 160L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L343.5 96 268.3 5.8C265.3 2.1 260.7 0 256 0s-9.3 2.1-12.3 5.8L168.5 96z" />
    </Icon>
);

export default MessageMiddleTop;
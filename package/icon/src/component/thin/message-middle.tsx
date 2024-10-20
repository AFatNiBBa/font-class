
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=thin message-middle}
 * @preview ![message-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message-middle.svg)
 */
const MessageMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M343.5 400L448 400c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L64 16C37.5 16 16 37.5 16 64l0 288c0 26.5 21.5 48 48 48l104.5 0c4.7 0 9.3 2.1 12.3 5.8L256 496l75.2-90.2c3-3.6 7.5-5.8 12.3-5.8zm-175 16L64 416c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-104.5 0-75.2 90.2c-3 3.6-7.5 5.8-12.3 5.8s-9.3-2.1-12.3-5.8L168.5 416z" />
    </Icon>
);

export default MessageMiddle;
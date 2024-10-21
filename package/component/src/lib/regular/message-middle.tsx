
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=regular message-middle}
 * @preview ![message-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/message-middle.svg)
 */
const MessageMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M343.5 368L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l104.5 0c14.2 0 27.8 6.3 36.9 17.3L256 446l50.6-60.7c9.1-10.9 22.6-17.3 36.9-17.3zm-175 48L64 416c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-104.5 0-75.2 90.2c-3 3.6-7.5 5.8-12.3 5.8s-9.3-2.1-12.3-5.8L168.5 416z" />
    </Icon>
);

export default MessageMiddle;
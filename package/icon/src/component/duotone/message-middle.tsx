
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=duotone message-middle}
 * @preview ![message-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-middle.svg)
 */
const MessageMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M343.5 416L448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l104.5 0 75.2 90.2c3 3.6 7.5 5.8 12.3 5.8s9.3-2.1 12.3-5.8L343.5 416z" />
    </Icon>
);

export default MessageMiddle;
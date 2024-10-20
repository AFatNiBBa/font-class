
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up?s=sharp-regular message-arrow-up}
 * @preview ![message-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message-arrow-up.svg)
 */
const MessageArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 512l48-32 96-64 160 0 48 0 0-48 0-320 0-48L464 0 48 0 0 0 0 48 0 368l0 48 48 0 64 0 48 0 0 38.3 0 9.7 0 48zM277.4 376.1L208 422.3l0-6.3 0-48-48 0L48 368 48 48l416 0 0 320-160 0-14.5 0-12.1 8.1zM280 296l0-110.1 31 31 17 17L361.9 200l-17-17-72-72-17-17-17 17-72 72-17 17L184 233.9l17-17 31-31L232 296l0 24 48 0 0-24z" />
    </Icon>
);

export default MessageArrowUp;
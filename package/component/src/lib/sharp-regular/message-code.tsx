
import { Icon } from "../../index";

/**
 * A component that renders the `message-code` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-code?s=sharp-regular message-code}
 * @preview ![message-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message-code.svg)
 */
const MessageCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 512l48-32 96-64 160 0 48 0 0-48 0-320 0-48L464 0 48 0 0 0 0 48 0 368l0 48 48 0 64 0 48 0 0 38.3 0 9.7 0 48zM277.4 376.1L208 422.3l0-6.3 0-48-48 0L48 368 48 48l416 0 0 320-160 0-14.5 0-12.1 8.1zM217 161l17-17L200 110.1l-17 17-64 64-17 17 17 17 64 64 17 17L233.9 272l-17-17-47-47 47-47zM329 127l-17-17L278.1 144l17 17 47 47-47 47-17 17L312 305.9l17-17 64-64 17-17-17-17-64-64z" />
    </Icon>
);

export default MessageCode;
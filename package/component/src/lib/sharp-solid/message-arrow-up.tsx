
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up?s=sharp-solid message-arrow-up}
 * @preview ![message-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-arrow-up.svg)
 */
const MessageArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM280 296l0-110.1 31 31 17 17L361.9 200l-17-17-72-72-17-17-17 17-72 72-17 17L184 233.9l17-17 31-31L232 296l0 24 48 0 0-24z" />
    </Icon>
);

export default MessageArrowUp;
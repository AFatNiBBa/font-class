
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-xmark?s=sharp-duotone-solid message-xmark}
 * @preview ![message-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-xmark.svg)
 */
const MessageXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM158.1 144c5.7 5.7 11.3 11.3 17 17c15.7 15.7 31.4 31.4 47 47c-15.7 15.7-31.4 31.4-47 47c-5.7 5.7-11.3 11.3-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.4 47-47l47 47 17 17L353.9 272l-17-17-47-47c15.7-15.7 31.4-31.4 47-47l17-17c-11.3-11.3-22.6-22.6-33.9-33.9c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.4 31.4-47 47c-15.7-15.7-31.4-31.4-47-47c-5.7-5.7-11.3-11.3-17-17c-11.3 11.3-22.6 22.6-33.9 33.9z" />
        <path d="M337 161l17-17L320 110.1l-17 17-47 47-47-47-17-17L158.1 144l17 17 47 47-47 47-17 17L192 305.9l17-17 47-47 47 47 17 17L353.9 272l-17-17-47-47 47-47z" />
    </Icon>
);

export default MessageXmark;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-check?s=sharp-duotone-solid message-check}
 * @preview ![message-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-check.svg)
 */
const MessageCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM126.1 200c.3 .3 .6 .6 1 1c5.3 5.3 10.7 10.7 16 16c21.3 21.3 42.7 42.7 64 64l17 17 17-17c42.7-42.7 85.3-85.3 128-128c5.3-5.3 10.7-10.7 16-16c.3-.3 .6-.6 1-1L352 102.1c-.3 .3-.6 .6-1 1c-5.3 5.3-10.7 10.7-16 16c-37 37-74 74-111 111c-15.7-15.7-31.4-31.4-47-47c-5.3-5.3-10.7-10.7-16-16c-.3-.3-.6-.6-1-1L126.1 200z" />
        <path d="M385 137L241 281l-17 17-17-17-80-80L161 167l63 63L351 103 385 137z" />
    </Icon>
);

export default MessageCheck;
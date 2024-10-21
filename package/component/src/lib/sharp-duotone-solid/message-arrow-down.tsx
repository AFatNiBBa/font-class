
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-down?s=sharp-duotone-solid message-arrow-down}
 * @preview ![message-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-arrow-down.svg)
 */
const MessageArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM150.1 224l17 17 72 72 17 17 17-17 72-72 17-17L328 190.1l-17 17-31 31L280 120l0-24-48 0 0 24 0 118.1-31-31-17-17L150.1 224z" />
        <path d="M280 96l0 24 0 118.1 31-31 17-17L361.9 224l-17 17-72 72-17 17-17-17-72-72-17-17L184 190.1l17 17 31 31L232 120l0-24 48 0z" />
    </Icon>
);

export default MessageArrowDown;
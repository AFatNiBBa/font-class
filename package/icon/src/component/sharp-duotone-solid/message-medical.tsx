
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-medical?s=sharp-duotone-solid message-medical}
 * @preview ![message-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-medical.svg)
 */
const MessageMedical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM160 176l0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0z" />
        <path d="M288 112l-64 0 0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64z" />
    </Icon>
);

export default MessageMedical;
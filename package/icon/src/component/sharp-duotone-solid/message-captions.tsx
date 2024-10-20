
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-captions` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-captions?s=sharp-duotone-solid message-captions}
 * @preview ![message-captions](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-captions.svg)
 */
const MessageCaptions: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM96 192l0 48 24 0 144 0 24 0 0-48-24 0-144 0-24 0zm0 80l0 48 24 0 48 0 24 0 0-48-24 0-48 0-24 0zm128 0l0 48 24 0 144 0 24 0 0-48-24 0-144 0-24 0zm96-80l0 48 24 0 48 0 24 0 0-48-24 0-48 0-24 0z" />
        <path d="M96 192l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48zm224 0l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zM96 272l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zm128 0l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default MessageCaptions;
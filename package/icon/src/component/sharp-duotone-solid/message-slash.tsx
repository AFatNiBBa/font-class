
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-slash?s=sharp-duotone-solid message-slash}
 * @preview ![message-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-slash.svg)
 */
const MessageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 0L576 0l0 416-10.8 0C398.1 286.3 231.1 156.6 64 26.9L64 0zm0 146.4L406.2 416 368 416 224 512l0-96L64 416l0-269.6z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default MessageSlash;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `reply` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=sharp-duotone-solid reply}
 * @preview ![reply](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/reply.svg)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 128l112 0c97.2 0 176 78.8 176 176c0 128-128 176-128 176s32-32 32-80c0-61.9-50.1-112-112-112l-80 0 0-160z" />
        <path d="M192 384L0 208 192 32l32 0 0 352-32 0z" />
    </Icon>
);

export default Reply;
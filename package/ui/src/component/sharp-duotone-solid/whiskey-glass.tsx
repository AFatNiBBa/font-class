
import { Icon, generic } from "../../index";

/**
 * A component that renders the `whiskey-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=sharp-duotone-solid whiskey-glass}
 * @preview ![whiskey-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/whiskey-glass.svg)
 */
const WhiskeyGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L9.1 96 64 480l384 0L502.9 96 512 32l-64.6 0L64.6 32 0 32zM73.8 96l364.4 0c-6.1 42.7-12.2 85.3-18.3 128L392.5 416l-273 0c-9.1-64-18.3-128-27.4-192C86 181.3 79.9 138.7 73.8 96z" />
        <path d="M92.1 224l27.4 192 273 0 27.4-192L92.1 224z" />
    </Icon>
);

export default WhiskeyGlass;
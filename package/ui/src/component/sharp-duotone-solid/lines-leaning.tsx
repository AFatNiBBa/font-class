
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lines-leaning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lines-leaning?s=sharp-duotone-solid lines-leaning}
 * @preview ![lines-leaning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lines-leaning.svg)
 */
const LinesLeaning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M-.1 469L61 488.1l9.5-30.5 120-384L200.1 43 139 23.9l-9.5 30.5-120 384L-.1 469zM320 32l0 32 0 384 0 32 64 0 0-32 0-384 0-32-64 0z" />
        <path d="M292.8 37.7l-5.3 31.6-64 384-5.3 31.6-63.1-10.5 5.3-31.6 64-384 5.3-31.6 63.1 10.5z" />
    </Icon>
);

export default LinesLeaning;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/4?s=sharp-duotone-solid 4}
 * @preview ![4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/4.svg)
 */
const $4: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M209.8 32l-69.4 0L18.5 323.7-.1 368 48 368l208 0 0 80 0 32 64 0 0-32 0-80 32 0 32 0 0-64-32 0-32 0 0-144 0-32-64 0 0 32 0 144L96.1 304 205.5 42.3 209.8 32z" />
    </Icon>
);

export default $4;
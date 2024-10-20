
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=sharp-duotone-solid arrow-up-right}
 * @preview ![arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-right.svg)
 */
const ArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M18.7 384L64 429.3l22.6-22.6L288 205.3l0-45.3-45.3 0L41.4 361.4 18.7 384z" />
        <path d="M352 96l-32 0L96 96 64 96l0 64 32 0 192 0 0 192 0 32 64 0 0-32 0-224 0-32z" />
    </Icon>
);

export default ArrowUpRight;
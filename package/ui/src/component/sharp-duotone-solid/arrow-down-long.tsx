
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=sharp-duotone-solid arrow-down-long}
 * @preview ![arrow-down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-long.svg)
 */
const ArrowDownLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 0l0 32 0 357.5 32 32 32-32L224 32l0-32L160 0z" />
        <path d="M192 512l-22.6-22.6-128-128L18.7 338.7 64 293.5l22.6 22.6L192 421.5 297.4 316.1 320 293.5l45.3 45.3-22.6 22.6-128 128L192 512z" />
    </Icon>
);

export default ArrowDownLong;
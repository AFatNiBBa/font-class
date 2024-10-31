
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=sharp-duotone-solid arrow-up-long}
 * @preview ![arrow-up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-long.svg)
 */
const ArrowUpLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 122.5c10.7-10.7 21.3-21.3 32-32c10.7 10.7 21.3 21.3 32 32L224 480l0 32-64 0 0-32 0-357.5z" />
        <path d="M192 0L169.4 22.6l-128 128L18.7 173.3 64 218.5l22.6-22.6L192 90.5 297.4 195.9 320 218.5l45.3-45.3-22.6-22.6-128-128L192 0z" />
    </Icon>
);

export default ArrowUpLong;
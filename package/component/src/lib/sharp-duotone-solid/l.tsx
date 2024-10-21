
import { Icon, generic } from "../../index";

/**
 * A component that renders the `l` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=sharp-duotone-solid l}
 * @preview ![l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/l.svg)
 */
const L: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 32 0 352 192 0 32 0 0 64-32 0L64 480l-32 0 0-32L32 64l0-32 64 0z" />
    </Icon>
);

export default L;
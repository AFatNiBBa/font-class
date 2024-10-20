
import { Icon, generic } from "../../index";

/**
 * A component that renders the `l` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=duotone l}
 * @preview ![l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/l.svg)
 */
const L: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M64 32c17.7 0 32 14.3 32 32l0 352 192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default L;
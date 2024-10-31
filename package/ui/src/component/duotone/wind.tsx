
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wind` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind?s=duotone wind}
 * @preview ![wind](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wind.svg)
 */
const Wind: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32z" />
        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
    </Icon>
);

export default Wind;
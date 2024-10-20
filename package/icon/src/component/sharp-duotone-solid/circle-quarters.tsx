
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-quarters` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarters?s=sharp-duotone-solid circle-quarters}
 * @preview ![circle-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-quarters.svg)
 */
const CircleQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M120.2 120.2L256 256 391.8 120.2C357 85.5 309 64 256 64s-101 21.5-135.8 56.2zm0 271.5C155 426.5 203 448 256 448s101-21.5 135.8-56.2L256 256 120.2 391.8z" />
        <path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default CircleQuarters;
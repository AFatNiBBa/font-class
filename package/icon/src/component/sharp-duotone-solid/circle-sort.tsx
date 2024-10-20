
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-sort` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort?s=sharp-duotone-solid circle-sort}
 * @preview ![circle-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-sort.svg)
 */
const CircleSort: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-64L256 96l112 96 0 32-224 0 0-32zm0 96l224 0 0 32L256 416 144 320l0-32z" />
        <path d="M256 96L144 192l0 32 224 0 0-32L256 96zm0 320l112-96 0-32-224 0 0 32 112 96z" />
    </Icon>
);

export default CircleSort;
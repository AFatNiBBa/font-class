
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-1` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-1?s=sharp-duotone-solid circle-1}
 * @preview ![circle-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-1.svg)
 */
const Circle_1: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm176-91.5L236.3 131l5.4-3 6.2 0 8 0 24 0 0 24 0 184 32 0 24 0 0 48-24 0-56 0-56 0-24 0 0-48 24 0 32 0 0-147.7L187.7 213 176 219.5l0-54.9z" />
        <path d="M241.8 128l6.2 0 8 0 24 0 0 24 0 184 32 0 24 0 0 48-24 0-56 0-56 0-24 0 0-48 24 0 32 0 0-147.7L187.7 213 176 219.5l0-54.9L236.3 131l5.4-3z" />
    </Icon>
);

export default Circle_1;
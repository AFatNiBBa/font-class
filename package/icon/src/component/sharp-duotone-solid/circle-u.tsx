
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-u` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-u?s=sharp-duotone-solid circle-u}
 * @preview ![circle-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-u.svg)
 */
const CircleU: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM144 144l48 0 0 24 0 120c0 35.3 28.7 64 64 64s64-28.7 64-64l0-120 0-24 48 0 0 24 0 120c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-120 0-24z" />
        <path d="M192 144l0 24 0 120c0 35.3 28.7 64 64 64s64-28.7 64-64l0-120 0-24 48 0 0 24 0 120c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-120 0-24 48 0z" />
    </Icon>
);

export default CircleU;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-pause` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-pause?s=sharp-duotone-solid circle-pause}
 * @preview ![circle-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-pause.svg)
 */
const CirclePause: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-96l64 0 0 32 0 128 0 32-64 0 0-32 0-128 0-32zm128 0l64 0 0 32 0 128 0 32-64 0 0-32 0-128 0-32z" />
        <path d="M224 160l0 32 0 128 0 32-64 0 0-32 0-128 0-32 64 0zm128 0l0 32 0 128 0 32-64 0 0-32 0-128 0-32 64 0z" />
    </Icon>
);

export default CirclePause;
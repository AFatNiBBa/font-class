
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sliders-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-up?s=sharp-duotone-solid sliders-up}
 * @preview ![sliders-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sliders-up.svg)
 */
const SlidersUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0l64 0 0 32 0 32L64 64l0-32L64 0zm0 224l64 0 0 256 0 32-64 0 0-32 0-256zM224 0l64 0 0 32 0 256-64 0 0-256 0-32zm0 448l64 0 0 32 0 32-64 0 0-32 0-32zM384 0l64 0 0 32 0 64-64 0 0-64 0-32zm0 256l64 0 0 224 0 32-64 0 0-32 0-224z" />
        <path d="M128 112l0 64-64 0 0-64 64 0zM64 64L16 64l0 48 0 64 0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0L64 64zM288 336l0 64-64 0 0-64 64 0zm-64-48l-48 0 0 48 0 64 0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0-64 0zM384 144l64 0 0 64-64 0 0-64zM336 96l0 48 0 64 0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0-64 0-48 0z" />
    </Icon>
);

export default SlidersUp;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `brightness` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness?s=sharp-duotone-solid brightness}
 * @preview ![brightness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/brightness.svg)
 */
const Brightness: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 48 0 32 0 0-64-32 0-48 0L0 224zM50.7 96l22.6 22.6 32 32L128 173.3 173.3 128l-22.6-22.6-32-32L96 50.7 50.7 96zm0 320L96 461.3l22.6-22.6 32-32L173.3 384 128 338.7l-22.6 22.6-32 32L50.7 416zM224 0l0 32 0 48 0 32 64 0 0-32 0-48 0-32L224 0zm0 400l0 32 0 48 0 32 64 0 0-32 0-48 0-32-64 0zM338.7 128L384 173.3l22.6-22.6 32-32L461.3 96 416 50.7 393.4 73.4l-32 32L338.7 128zm0 256l22.6 22.6 32 32L416 461.3 461.3 416l-22.6-22.6-32-32L384 338.7 338.7 384zM400 224l0 64 32 0 48 0 32 0 0-64-32 0-48 0-32 0z" />
        <path d="M160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default Brightness;
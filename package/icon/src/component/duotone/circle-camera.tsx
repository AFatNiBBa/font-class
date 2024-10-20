
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=duotone circle-camera}
 * @preview ![circle-camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-camera.svg)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-64c0-17.7 14.3-32 32-32l36 0 6.2-16.4c3.5-9.4 12.5-15.6 22.5-15.6l62.7 0c10 0 19 6.2 22.5 15.6L316 160l36 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-128z" />
        <path d="M202.2 143.6L196 160l-36 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-36 0-6.2-16.4c-3.5-9.4-12.5-15.6-22.5-15.6l-62.7 0c-10 0-19 6.2-22.5 15.6zM256 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CircleCamera;
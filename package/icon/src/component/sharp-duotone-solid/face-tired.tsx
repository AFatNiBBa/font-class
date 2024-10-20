
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-tired` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tired?s=sharp-duotone-solid face-tired}
 * @preview ![face-tired](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-tired.svg)
 */
const FaceTired: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM112 144l118.9 64L112 272l45.7-64L112 144zm16 272c0-70.7 57.3-128 128-128s128 57.3 128 128c0 4.2-.2 8.3-.6 12.3C349.5 400.8 304.9 384 256 384s-93.5 16.8-127.4 44.3c-.4-4.1-.6-8.2-.6-12.3zM281.1 208L400 144l-45.7 64L400 272 281.1 208z" />
        <path d="M230.9 208L112 144l45.7 64L112 272l118.9-64zm50.3 0L400 272l-45.7-64L400 144 281.1 208z" />
    </Icon>
);

export default FaceTired;
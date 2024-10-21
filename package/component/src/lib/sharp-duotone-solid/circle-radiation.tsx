
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-radiation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-radiation?s=sharp-duotone-solid circle-radiation}
 * @preview ![circle-radiation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-radiation.svg)
 */
const CircleRadiation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm448 0A192 192 0 1 1 64 256a192 192 0 1 1 384 0zm-224 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M200 256c0-20.7 11.3-38.8 28-48.5l-52-90.1C128.2 145.1 96 196.8 96 256l104 0zm28 48.5l-52 90.1c23.5 13.6 50.9 21.4 80 21.4s56.5-7.8 80-21.4l-52-90.1c-8.2 4.8-17.8 7.5-28 7.5s-19.8-2.7-28-7.5zM312 256l104 0c0-59.2-32.2-110.9-80-138.6l-52 90.1c16.7 9.7 28 27.8 28 48.5z" />
    </Icon>
);

export default CircleRadiation;
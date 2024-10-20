
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-q` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=sharp-duotone-solid circle-q}
 * @preview ![circle-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-q.svg)
 */
const CircleQ: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0c0-70.7 57.3-128 128-128s128 57.3 128 128c0 28.1-9 54-24.4 75.1L401.9 384l-61.5 0-15.9-19.9C304.7 376.7 281.2 384 256 384c-70.7 0-128-57.3-128-128zm48 0c0 44.2 35.8 80 80 80c13.9 0 26.9-3.5 38.3-9.7L238.1 256l61.5 0 28.3 35.3c5.3-10.7 8.2-22.6 8.2-35.3c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
        <path d="M176 256c0 44.2 35.8 80 80 80c13.9 0 26.9-3.5 38.3-9.7L238.1 256l61.5 0 28.3 35.3c5.3-10.7 8.2-22.6 8.2-35.3c0-44.2-35.8-80-80-80s-80 35.8-80 80zM324.6 364.1C304.7 376.7 281.2 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 28.1-9 54-24.4 75.1L401.9 384l-61.5 0-15.9-19.9z" />
    </Icon>
);

export default CircleQ;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `00` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/00?s=duotone 00}
 * @preview ![00](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/00.svg)
 */
const $00: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M352 176c0-79.5 64.5-144 144-144s144 64.5 144 144l0 160c0 79.5-64.5 144-144 144s-144-64.5-144-144l0-160zm64 0l0 160c0 44.2 35.8 80 80 80s80-35.8 80-80l0-160c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
        <path d="M0 176C0 96.5 64.5 32 144 32s144 64.5 144 144l0 160c0 79.5-64.5 144-144 144S0 415.5 0 336L0 176zM144 96c-44.2 0-80 35.8-80 80l0 160c0 44.2 35.8 80 80 80s80-35.8 80-80l0-160c0-44.2-35.8-80-80-80z" />
    </Icon>
);

export default $00;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=duotone circle-arrow-up}
 * @preview ![circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-arrow-up.svg)
 */
const CircleArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm120-8c0-6.1 2.3-12.3 7-17L239 119c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7L385 231c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17c-9.4 9.4-24.6 9.4-33.9 0l-71-71L280 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-182.1-71 71c-9.4 9.4-24.6 9.4-33.9 0c-4.7-4.7-7-10.8-7-17z" />
        <path d="M239 119c9.4-9.4 24.6-9.4 33.9 0L385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71L280 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-182.1-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119z" />
    </Icon>
);

export default CircleArrowUp;
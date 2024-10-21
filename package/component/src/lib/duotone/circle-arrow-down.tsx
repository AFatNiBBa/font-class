
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down?s=duotone circle-arrow-down}
 * @preview ![circle-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-arrow-down.svg)
 */
const CircleArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm120 8c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17L273 393c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7L127 281c-4.7-4.7-7-10.8-7-17z" />
        <path d="M239 393c9.4 9.4 24.6 9.4 33.9 0L385 281c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-71 71L280 136c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 182.1-71-71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 393z" />
    </Icon>
);

export default CircleArrowDown;
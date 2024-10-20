
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-right?s=duotone circle-arrow-right}
 * @preview ![circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-arrow-right.svg)
 */
const CircleArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zm-400 0c0 13.3 10.7 24 24 24l182.1 0-71 71c-9.4 9.4-9.4 24.6 0 33.9c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7L393 273c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17L281 127c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7c-9.4 9.4-9.4 24.6 0 33.9l71 71L136 232c-13.3 0-24 10.7-24 24z" />
        <path d="M393 239c9.4 9.4 9.4 24.6 0 33.9L281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239z" />
    </Icon>
);

export default CircleArrowRight;
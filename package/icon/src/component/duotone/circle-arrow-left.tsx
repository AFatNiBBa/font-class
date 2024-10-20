
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=duotone circle-arrow-left}
 * @preview ![circle-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-arrow-left.svg)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm112 0c0-6.1 2.3-12.3 7-17L231 127c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c9.4 9.4 9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7L119 273c-4.7-4.7-7-10.8-7-17z" />
        <path d="M119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273z" />
    </Icon>
);

export default CircleArrowLeft;
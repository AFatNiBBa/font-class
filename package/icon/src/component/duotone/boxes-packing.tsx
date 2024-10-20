
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boxes-packing` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-packing?s=duotone boxes-packing}
 * @preview ![boxes-packing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/boxes-packing.svg)
 */
const BoxesPacking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 48l0 80 112 0c26.5 0 48 21.5 48 48l0 32c0 20.9-13.4 38.7-32 45.3L384 496c0 5.6-1 11-2.7 16L592 512c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L304 0c-26.5 0-48 21.5-48 48zM420.7 324.7l64-64c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L512 310.6 512 432c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-121.4-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z" />
        <path d="M16 160l352 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16L16 224c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm16 96l320 0 0 224c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-224zm96 80c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default BoxesPacking;
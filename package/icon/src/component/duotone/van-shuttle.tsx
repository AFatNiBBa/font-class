
import { Icon, generic } from "../../index";

/**
 * A component that renders the `van-shuttle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=duotone van-shuttle}
 * @preview ![van-shuttle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/van-shuttle.svg)
 */
const VanShuttle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 400a80 80 0 1 0 160 0A80 80 0 1 0 80 400zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M64 104c0-4.4 3.6-8 8-8l88 0 0 96-96 0 0-88zm482 88l-162 0 0-96 81.1 0L546 192zm-226 0l-96 0 0-96 96 0 0 96zM72 32C32.2 32 0 64.2 0 104L0 336c0 26.5 21.5 48 48 48l1.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l98.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l1.1 0c26.5 0 48-21.5 48-48l0-108.3c0-15.1-5.3-29.7-15-41.2L514.1 54.8C501.9 40.3 484 32 465.1 32L352 32 192 32 72 32z" />
    </Icon>
);

export default VanShuttle;
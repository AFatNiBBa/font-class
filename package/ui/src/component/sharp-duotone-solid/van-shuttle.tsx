
import { Icon, generic } from "../../index";

/**
 * A component that renders the `van-shuttle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=sharp-duotone-solid van-shuttle}
 * @preview ![van-shuttle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/van-shuttle.svg)
 */
const VanShuttle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 400a80 80 0 1 0 160 0A80 80 0 1 0 80 400zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M32 32L0 32 0 64 0 352l0 32 32 0 17.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l98.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l17.1 0 32 0 0-32 0-136 0-11.7-7.5-8.9-128-152L494.9 32 480 32 352 32 192 32 32 32zM64 192l0-96 96 0 0 96-96 0zm482 0l-162 0 0-96 81.1 0L546 192zm-226 0l-96 0 0-96 96 0 0 96z" />
    </Icon>
);

export default VanShuttle;
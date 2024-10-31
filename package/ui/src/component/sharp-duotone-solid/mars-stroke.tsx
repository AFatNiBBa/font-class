
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mars-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke?s=sharp-duotone-solid mars-stroke}
 * @preview ![mars-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mars-stroke.svg)
 */
const MarsStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 304a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M512 0L384 0 352 32l41.4 41.4-23 23L345 71l-17-17L294.1 88l17 17 25.4 25.4L307.8 159c-28.4-19.5-62.7-31-99.8-31c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176c0-37-11.4-71.4-31-99.8l28.6-28.6L407 201l17 17L457.9 184l-17-17-25.4-25.4 23-23L480 160l32-32L512 0zM96 304a112 112 0 1 1 224 0A112 112 0 1 1 96 304z" />
    </Icon>
);

export default MarsStroke;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `tire-rugged` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tire-rugged?s=sharp-duotone-solid tire-rugged}
 * @preview ![tire-rugged](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tire-rugged.svg)
 */
const TireRugged: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm82.3-14.8a24 24 0 1 1 -45.7-14.8 24 24 0 1 1 45.7 14.8zm22.7 87.2a24 24 0 1 1 -38.8-28.2 24 24 0 1 1 38.8 28.2zM280 184a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm37.7 116.1a24 24 0 1 1 -38.8 28.2 24 24 0 1 1 38.8-28.2zm29.6-73.8a24 24 0 1 1 -45.7 14.8 24 24 0 1 1 45.7-14.8z" />
        <path d="M192 0L320 0l0 41.3c14.9 4.4 29.1 10.4 42.6 17.6l29.2-29.2 90.5 90.5-29.2 29.2c7.3 13.4 13.2 27.7 17.6 42.6l41.3 0 0 128-41.3 0c-4.4 14.9-10.4 29.1-17.6 42.6l29.2 29.2-90.5 90.5-29.2-29.2c-13.4 7.3-27.7 13.2-42.6 17.6l0 41.3-128 0 0-41.3c-14.9-4.4-29.1-10.4-42.6-17.6l-29.2 29.2L29.7 391.8l29.2-29.2c-7.3-13.4-13.2-27.7-17.6-42.6L0 320 0 192l41.3 0c4.4-14.9 10.4-29.1 17.6-42.6L29.7 120.2l90.5-90.5 29.2 29.2c13.4-7.3 27.7-13.2 42.6-17.6L192 0zM384 256a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
    </Icon>
);

export default TireRugged;
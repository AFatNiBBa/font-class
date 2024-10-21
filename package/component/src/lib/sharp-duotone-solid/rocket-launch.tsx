
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rocket-launch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket-launch?s=sharp-duotone-solid rocket-launch}
 * @preview ![rocket-launch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rocket-launch.svg)
 */
const RocketLaunch: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 287.6l118.5 .2c19.8-44.1 52.6-114.1 81.3-159.9L80 128 0 287.6zM.5 511.5s116.5 8 166-41.5c34.4-34.4 34.4-90.1 0-124.5s-90.1-34.4-124.5 0C-7.5 395 .5 511.5 .5 511.5zm64.1-64.1s-2.7-38.7 13.8-55.2c11.4-11.4 30-11.4 41.4 0s11.4 30 0 41.4c-16.5 16.5-55.2 13.8-55.2 13.8zm159.1-55.5c.3 39.9 .3 80 .3 120.1l160-80 0-119.9c-45.6 28.5-115.4 60.4-160.3 79.8z" />
        <path d="M223.7 391.9c-4-56-49.1-100.6-105.3-103.8c21.4-47.9 58.4-126.6 88.8-171.5C296.6-15.1 433.7-7.9 502.7 9.3c17.2 68.9 24.5 206-107.4 295.4c-44.7 30.3-123.1 66.2-171.6 87.2zM424 128a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
    </Icon>
);

export default RocketLaunch;
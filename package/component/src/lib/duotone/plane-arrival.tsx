
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-arrival` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-arrival?s=duotone plane-arrival}
 * @preview ![plane-arrival](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plane-arrival.svg)
 */
const PlaneArrival: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 480c0-17.7 14.3-32 32-32l576 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32zM192 368a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M0 68l.2 98.9c0 8.4 3.4 16.5 9.3 22.5l82.9 83.5c8.1 8.1 18.2 14 29.3 16.9l298.4 77.7c42.6 11.1 87.6 8.6 128.8-7c28.8-10.9 34.8-49 10.7-68.2l-34.4-27.6c-13-10.4-27.8-18.1-43.7-22.8L374.2 210.2 265.2 16.3C259.5 6.2 248.8 0 237.3 0L197.2 0c-10.6 0-18.3 10.2-15.4 20.4l41.5 145.2L96 128 78.1 80.2c-3.8-10.1-12.5-17.7-23-20L19.5 52.3C9.5 50.1 0 57.7 0 68z" />
    </Icon>
);

export default PlaneArrival;
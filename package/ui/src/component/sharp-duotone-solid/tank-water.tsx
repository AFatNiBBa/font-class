
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tank-water` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tank-water?s=sharp-duotone-solid tank-water}
 * @preview ![tank-water](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tank-water.svg)
 */
const TankWater: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 297.9L64 348l0 68 320 0 0-68 0-50.1c-8.3-3-16.2-6.8-23.4-10.8c-15.4-8.7-27-19.1-40-30.7l-.7-.6-.7 .6c-13 11.6-24.6 22-40 30.7c-15.8 9-35.5 16.8-55.1 16.9l-.5 0c-19.6-.1-39.3-7.9-55.1-16.9c-15.4-8.7-27-19.1-40-30.7l-.7-.6-.7 .6c-13 11.6-24.6 22-40 30.7c-7.1 4-15 7.8-23.3 10.8zM168 168.2c0 30.8 25.2 55.8 56 55.8s56-25 56-55.8c0-10.6-3-21-8.7-29.9L224 64l-47.3 74.3c-5.7 8.9-8.7 19.3-8.7 29.9z" />
        <path d="M241.6 32L251 46.8 282.3 96 384 96l0 320L64 416 64 96l101.7 0L197 46.8 206.4 32 64 32 0 32 0 96 0 416l0 64 64 0 320 0 64 0 0-64 0-320 0-64-64 0L241.6 32z" />
    </Icon>
);

export default TankWater;
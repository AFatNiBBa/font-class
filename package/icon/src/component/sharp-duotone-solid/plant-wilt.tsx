
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plant-wilt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plant-wilt?s=sharp-duotone-solid plant-wilt}
 * @preview ![plant-wilt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plant-wilt.svg)
 */
const PlantWilt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 248l0 13c9.6-3.3 20.4-5 32-5c1.5 0 2.9 0 4.3 .1s2.8 .1 4.2 .2c2.8 .2 5.5 .5 8.2 .9c5.3 .8 10.4 2.1 15.2 3.7l0-13c0-30.9 25.1-56 56-56s56 25.1 56 56l0 32 0 200 0 32 64 0 0-32 0-200 0-32 0-128c0-30.9 25.1-56 56-56s56 25.1 56 56l0 13c9.6-3.3 20.4-5 32-5c1.5 0 2.9 0 4.3 .1s2.8 .1 4.2 .2c2.8 .2 5.5 .5 8.2 .9c5.3 .8 10.4 2.1 15.2 3.7l0-13C464 53.7 410.3 0 344 0S224 53.7 224 120l0 21.8C207.3 133 188.2 128 168 128c-66.3 0-120 53.7-120 120z" />
        <path d="M512 203.1c0 28.9-35.8 79.4-80 116.9c-44.2-37.5-80-87.6-80-116.9c0-47.3 32.9-75.1 80-75.1s80 27.8 80 75.1zm-352 128c0 28.9-35.8 79.4-80 116.9C35.8 410.5 0 360.4 0 331.1C0 283.8 32.9 256 80 256s80 27.8 80 75.1z" />
    </Icon>
);

export default PlantWilt;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-side-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-side-bolt?s=sharp-duotone-solid car-side-bolt}
 * @preview ![car-side-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-side-bolt.svg)
 */
const CarSideBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 432a80 80 0 1 0 160 0A80 80 0 1 0 64 432zm352 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M96 64L42.7 224 0 224 0 432l32 0c0-61.9 50.1-112 112-112s112 50.1 112 112l128 0c0-61.9 50.1-112 112-112s112 50.1 112 112l32 0 0-208-117.3 0L416 64 96 64zM208 240L336 112l-24 96 88 0L272 336l24-96-88 0z" />
    </Icon>
);

export default CarSideBolt;
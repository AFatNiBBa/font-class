
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-side-bolt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-side-bolt?s=duotone car-side-bolt}
 * @preview ![car-side-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-side-bolt.svg)
 */
const CarSideBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 432a80 80 0 1 0 160 0A80 80 0 1 0 64 432zM192.6 212.4c2 6.9 8.2 11.6 15.4 11.6l51.7 0-33.5 55.8c-3.8 6.3-2.8 14.5 2.5 19.6s13.4 6.1 19.7 2.2l128-80c6.1-3.8 8.9-11.1 6.9-18s-8.2-11.6-15.4-11.6l-51.7 0 33.5-55.8c3.8-6.3 2.8-14.5-2.5-19.6s-13.4-6.1-19.7-2.2l-128 80c-6.1 3.8-8.9 11.1-6.9 18zM416 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M528.2 225l-100-125c-18.2-22.8-45.8-36-75-36L171.3 64c-39.3 0-74.6 23.9-89.1 60.3L40.6 228.4C16.8 237.8 0 260.9 0 288L0 400c0 17.7 14.3 32 32 32c0-61.9 50.1-112 112-112s112 50.1 112 112l128 0c0-61.9 50.1-112 112-112s112 50.1 112 112c17.7 0 32-14.3 32-32l0-48c0-65.2-48.8-119-111.8-127zm-181-108.4c5.3 5.2 6.3 13.3 2.5 19.6L316.3 192l51.7 0c7.1 0 13.4 4.7 15.4 11.6s-.8 14.2-6.9 18l-128 80c-6.3 3.9-14.4 3-19.7-2.2s-6.3-13.3-2.5-19.6L259.7 224 208 224c-7.1 0-13.4-4.7-15.4-11.6s.8-14.2 6.9-18l128-80c6.3-3.9 14.4-3 19.7 2.2z" />
    </Icon>
);

export default CarSideBolt;
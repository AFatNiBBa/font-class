
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-laptop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-laptop?s=duotone house-laptop}
 * @preview ![house-laptop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-laptop.svg)
 */
const HouseLaptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M2.2 235.7C7 247.9 18.8 256 32 256l32 0 0 112c0 26.5 21.5 48 48 48l160 0 0-128-64 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 37.7c11.7-13.3 28.9-21.7 48-21.7l144 0c0-8.8-3.6-17.3-10.3-23.5l-208-192C255.6 2.8 247.8 0 240 0s-15.6 2.8-21.7 8.5l-208 192c-9.7 8.9-12.9 22.9-8.1 35.2z" />
        <path d="M352 448l192 0 0-144-192 0 0 144zm-48 0l0-160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32l0 160 32 0c8.8 0 16 7.2 16 16c0 26.5-21.5 48-48 48l-48 0-192 0-48 0c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16l32 0z" />
    </Icon>
);

export default HouseLaptop;
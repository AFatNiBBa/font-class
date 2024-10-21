
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume?s=duotone volume}
 * @preview ![volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/volume.svg)
 */
const Volume: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M405.4 200.1c0-5.3 1.8-10.7 5.4-15.1c8.4-10.3 23.5-11.8 33.8-3.5C466.1 199.1 480 225.9 480 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-5.8-4.7-8.9-11.7-8.9-18.6zm65.9-89.6c8.4-10.3 23.5-11.8 33.8-3.5c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8z" />
        <path d="M352 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L163.8 160 96 160c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l67.8 0L298.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S352 460.6 352 448l0-384z" />
    </Icon>
);

export default Volume;
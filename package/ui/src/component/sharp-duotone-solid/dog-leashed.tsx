
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dog-leashed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dog-leashed?s=sharp-duotone-solid dog-leashed}
 * @preview ![dog-leashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dog-leashed.svg)
 */
const DogLeashed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M97.4 23.8l11 11.6L256 190.4 256 384l0 16 32 0 0-16c0-2.2 0-4.4 0-6.6c0-56.4 0-112.8 0-169.3c42.7 18 85.3 35.9 128 53.9c.6 .3 1.2 .5 1.8 .8l14.7 6.2L445 239.5l-14.7-6.2c-3.2-1.4-6.5-2.7-9.7-4.1c-38.2-16.1-76.4-32.2-114.6-48.3l-24.6-10.3L131.6 13.3l-11-11.6L97.4 23.8z" />
        <path d="M256 192l-80 0-16 0-16 0-39.5 0c-16.1 0-29.8-12-31.8-28l-1-7.9-4-31.8L4.3 132.2l4 31.8 1 7.9c4.2 33.7 25.6 61.6 54.8 75.1L64 512l96 0 0-147.2c24 12.3 51.2 19.2 80 19.2c5.4 0 10.7-.2 16-.7L256 192zm32 185.4c11.2-3.2 21.9-7.4 32-12.6L320 512l96 0 0-250L288 208.1l0 169.3zM420.5 229.2l6.2-37.2 21.3 0 16 0 32 0c44.2 0 80-35.8 80-80l0-48-80 0L464 32l-72 0L368 0 336 0 305.9 180.9l114.6 48.3zM432 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default DogLeashed;
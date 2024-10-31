
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shrimp` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shrimp?s=sharp-duotone-solid shrimp}
 * @preview ![shrimp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shrimp.svg)
 */
const Shrimp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l16 0 448 0 16 0 0 32-16 0L32 64l0 64 32 0c0 7.9 0 15.9 0 24.3l0-.4c0 1.5 0 2.7 0 3.8c0 .3 0 .5 0 .6c0 1.2 .1 2.3 .1 3.7L16 160 0 160l0-16L0 48 0 32zm288 96l32 0c0 64 0 128 0 192l-32 0c0-64 0-128 0-192zm32 279.8c1.1 .4 2.1 .7 3.2 1.1c9.9 3.4 19.9 3.3 28.8 .5l0 69.9c-5.3 .5-10.6 .7-16 .7l-16 0c0-24.1 0-48.2 0-72.2zm41.6-2.7c9.7-5.7 17.2-15 20.5-26.2L472.6 415c-7.3 9-15.5 17.3-24.5 24.7c-28.8-11.5-57.7-23.1-86.5-34.6zm3.3-76.5c44.5-30.8 89-61.6 133.5-92.4c4.3 10.2 7.6 20.9 9.9 32.1c-41.9 29-83.7 58-125.6 86.9c-2.6-10.9-9.1-20.2-17.9-26.5z" />
        <path d="M64 128l0 23.9C63.5 244.6 139.3 320 232 320l56 0 0-192L88.8 128 64 128zM338.3 320c9.9 0 19.1 3.2 26.6 8.5l133.5-92.4C471.8 172.6 409.1 128 336 128l-16 0 0 192 18.3 0zm170.1-51.9L382.8 355.1c.8 3.4 1.2 7 1.2 10.6c0 4.6-.7 9-1.9 13.1L472.6 415c24.6-30.3 39.4-68.9 39.4-111c0-12.3-1.3-24.3-3.7-35.9zM352 409.4l0 69.9c36.4-3.3 69.5-17.6 96.1-39.6l-86.5-34.6c-3 1.8-6.2 3.2-9.6 4.3zM320 480l0-72.2-96-33.6L224 480l96 0zM192 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Shrimp;
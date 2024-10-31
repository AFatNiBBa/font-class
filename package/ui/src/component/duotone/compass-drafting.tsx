
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compass-drafting` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-drafting?s=duotone compass-drafting}
 * @preview ![compass-drafting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/compass-drafting.svg)
 */
const CompassDrafting: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1c-11 18.9-21.9 37.8-32.9 56.8C53.7 301.6 41.8 289.3 31.2 276zm124.1 89.9l32.7-56.4c21.5 6.8 44.3 10.5 68.1 10.5s46.6-3.7 68.1-10.5c33.7-10.7 63.9-29.2 88.6-53.4c6.5-6.3 12.6-13.1 18.2-20.1c11.1-13.8 31.2-16 45-5c7.9 6.3 12 15.6 12 25c0 7-2.3 14.1-7 20c-10.7 13.3-22.5 25.6-35.3 36.8c-25.9 22.7-55.9 40.8-88.8 53C325.4 377.6 291.4 384 256 384s-69.4-6.4-100.7-18.1z" />
        <path d="M343.2 136.2c5.6-12.2 8.8-25.8 8.8-40.2c0-53-43-96-96-96s-96 43-96 96c0 14.3 3.1 27.9 8.8 40.2L6.5 416.5C2.2 423.9 0 432.2 0 440.6L0 496c0 5.5 2.9 10.7 7.6 13.6s10.6 3.2 15.6 .7l55.4-27.7c8.4-4.2 15.4-10.8 20.1-18.9L256 192c0 0 0 0 0 0s0 0 0 0l68 117.5c33.7-10.7 63.9-29.2 88.6-53.4L343.2 136.2zM224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM356.7 365.9l56.6 97.8c4.7 8.1 11.7 14.7 20.1 18.9l55.4 27.7c5 2.5 10.9 2.2 15.6-.7s7.6-8.1 7.6-13.6l0-55.4c0-8.4-2.2-16.7-6.5-24.1l-60-103.7c-25.9 22.7-55.9 40.8-88.8 53z" />
    </Icon>
);

export default CompassDrafting;
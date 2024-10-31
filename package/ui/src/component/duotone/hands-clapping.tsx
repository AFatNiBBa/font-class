
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-clapping` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-clapping?s=duotone hands-clapping}
 * @preview ![hands-clapping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hands-clapping.svg)
 */
const HandsClapping: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M208 32c0-5.2 2.5-10.2 7.1-13.3c7.4-4.9 17.3-2.9 22.2 4.4l32 48c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-32-48c-1.8-2.7-2.7-5.8-2.7-8.9zm96-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64zm51.4 492c48.1-39.6 76.6-99 76.6-162.4l0-98.1c8.2-.1 16-6.4 16-16l0-39.4c0-17.7 14.3-32 32-32s32 14.3 32 32l0 153.6c0 57.1-30 110-78.9 139.4c-24.2 14.5-50.9 22.1-77.7 23.1zM370.7 71.1l32-48c4.9-7.4 14.8-9.3 22.2-4.4s9.3 14.8 4.4 22.2l-32 48c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2z" />
        <path d="M135 119c9.4-9.4 24.6-9.4 33.9 0L292.7 242.7c10.1 10.1 27.3 2.9 27.3-11.3l0-39.4c0-17.7 14.3-32 32-32s32 14.3 32 32l0 153.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l53 53c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L23 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l93 93c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L55 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l117 117c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default HandsClapping;
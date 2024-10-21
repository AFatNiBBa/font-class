
import { Icon, generic } from "../../index";

/**
 * A component that renders the `split` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/split?s=duotone split}
 * @preview ![split](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/split.svg)
 */
const Split: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M165.5 288c25.5 0 49.9-10.1 67.9-28.1c1.3-1.3 2.6-2.6 3.9-3.9l86.6 86.6c6 6 14.1 9.4 22.6 9.4l37.5 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-6.1 6.1-14.3 9.4-22.6 9.4c-4.1 0-8.3-.8-12.2-2.4c-12-5-19.8-16.6-19.8-29.6l0-32-37.5 0c-25.5 0-49.9-10.1-67.9-28.1l-90.5-90.5c-6-6-14.1-9.4-22.6-9.4z" />
        <path d="M438.6 41.4c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 32-37.5 0c-25.5 0-49.9 10.1-67.9 28.1l-90.5 90.5c-6 6-14.1 9.4-22.6 9.4L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l133.5 0c25.5 0 49.9-10.1 67.9-28.1l90.5-90.5c6-6 14.1-9.4 22.6-9.4l37.5 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6l-64-64z" />
    </Icon>
);

export default Split;
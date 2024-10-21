
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-pointer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-pointer?s=sharp-duotone-solid hand-pointer}
 * @preview ![hand-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-pointer.svg)
 */
const HandPointer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M.1 325.4l24 32L80 432c33.7 45 84.6 73.4 140 79c4.8 .7 9.7 1 14.7 1l5.2 0 64.1 0 16 0c70.7 0 128-57.3 128-128l0-16 0-48 0-80-80 0 0-32-80 0 0-32-80 0L208 0 128 0l0 362.7L88.1 309.4l-24-32-64 48zM208 288l32 0c0 5.3 0 10.7 0 16c0 32 0 64 0 96c0 5.3 0 10.7 0 16l-32 0c0-5.3 0-10.7 0-16c0-32 0-64 0-96c0-5.3 0-10.7 0-16zm64 0l32 0c0 5.3 0 10.7 0 16c0 32 0 64 0 96c0 5.3 0 10.7 0 16l-32 0c0-5.3 0-10.7 0-16c0-32 0-64 0-96c0-5.3 0-10.7 0-16zm64 0l32 0 0 16 0 96 0 16-32 0 0-16 0-96 0-16z" />
        <path d="M240 288l0 16 0 96 0 16-32 0 0-16 0-96 0-16 32 0zm64 0l0 16 0 96 0 16-32 0 0-16 0-96 0-16 32 0zm64 16l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16z" />
    </Icon>
);

export default HandPointer;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `hotdog` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hotdog?s=sharp-duotone-solid hotdog}
 * @preview ![hotdog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hotdog.svg)
 */
const Hotdog: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M23.4 375.4c16-16 32-32 48-48c85.3-85.3 170.7-170.7 256-256c16-16 32-32 48-48c31.2-31.2 81.9-31.2 113.1 0s31.2 81.9 0 113.1l-48 48-256 256-48 48c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1zm43.4 16.6l13.2 29.1 14.6-6.6 88-40 5.5-2.5 2.5-5.5 37.5-82.5 82.5-37.5 5.5-2.5 2.5-5.5 37.5-82.5 82.5-37.5 14.6-6.6L439.9 82.8l-14.6 6.6-88 40-5.5 2.5-2.5 5.5-37.5 82.5-82.5 37.5-5.5 2.5-2.5 5.5-37.5 82.5L81.4 385.4l-14.6 6.6z" />
        <path d="M256 512L512 256l-71.4-71.4-256 256L256 512zM0 256l71.4 71.4 256-256L256 0 0 256zM438.6 118.6l14.6-6.6L439.9 82.8l-14.6 6.6-88 40-5.5 2.5-2.5 5.5-37.5 82.5-82.5 37.5-5.5 2.5-2.5 5.5-37.5 82.5L81.4 385.4l-14.6 6.6 13.2 29.1 14.6-6.6 88-40 5.5-2.5 2.5-5.5 37.5-82.5 82.5-37.5 5.5-2.5 2.5-5.5 37.5-82.5 82.5-37.5z" />
    </Icon>
);

export default Hotdog;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `crutches` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crutches?s=sharp-duotone-solid crutches}
 * @preview ![crutches](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/crutches.svg)
 */
const Crutches: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M.4 177.6l45.3 45.3 17.6-17.6L203.8 345.7l10.5-10.5 13.9-55.7L108.5 160l50.7-50.7 92.5 92.5L297 156.5 204.5 64l17.6-17.6L176.9 1.1 154.2 23.8 23 155 .4 177.6zM364.8 410.8l27.9 27.9 73 73 45.3-45.3L438 393.4l-2.4-2.4-2.8 2.8-67.9 17zM416.7 46.4c5.9 5.9 11.7 11.7 17.6 17.6c1.7 1.7 3.4 3.4 5 5l40.2 40.2c16.9 16.9 33.8 33.8 50.7 50.7c13.4 13.4 26.8 26.8 40.2 40.2c1.7 1.7 3.4 3.4 5 5c5.9 5.9 11.7 11.7 17.6 17.6l45.3-45.3L615.8 155 484.6 23.8 462 1.1 416.7 46.4z" />
        <path d="M337.1 161.3L434.3 64l45.3 45.3L404.8 184l50.7 50.7L530.3 160l45.3 45.3-97.4 97.4-56 56-6.3 6.3-8.6 2.1L287.9 396.9l-41.7 41.7-73 73L128 466.3l72.9-72.9c0 0 0 0 .1-.1l41.7-41.7 29.9-119.4 2.1-8.6 6.3-6.3 55.9-55.9c0 0 .1-.1 .1-.1s.1-.1 .1-.1zm22.5 68l-27.1 27.1L315.6 324l67.7-16.9L410.3 280l-50.7-50.7z" />
    </Icon>
);

export default Crutches;
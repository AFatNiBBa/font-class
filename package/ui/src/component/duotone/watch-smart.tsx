
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch-smart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-smart?s=duotone watch-smart}
 * @preview ![watch-smart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/watch-smart.svg)
 */
const WatchSmart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 144c0-38.7 27.5-71 64-78.4c5.2-1 10.5-1.6 16-1.6l224 0c5.5 0 10.8 .6 16 1.6c36.5 7.4 64 39.7 64 78.4l0 224c0 38.7-27.5 71-64 78.4c-5.2 1-10.5 1.6-16 1.6L80 448c-5.5 0-10.8-.6-16-1.6C27.5 439 0 406.7 0 368L0 144zm168 16l0 96c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M112.3 0C85.6 0 64 21.6 64 48.3l0 17.3c5.2-1 10.5-1.6 16-1.6l224 0c5.5 0 10.8 .6 16 1.6l0-17.3C320 21.6 298.4 0 271.7 0L112.3 0zM64 464c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-17.6c-5.2 1-10.5 1.6-16 1.6L80 448c-5.5 0-10.8-.6-16-1.6L64 464zM216 160c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 96c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 0-86.1z" />
    </Icon>
);

export default WatchSmart;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch-apple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-apple?s=duotone watch-apple}
 * @preview ![watch-apple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/watch-apple.svg)
 */
const WatchApple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 144c0-38.7 27.5-71 64-78.4c5.2-1 10.5-1.6 16-1.6l224 0c5.5 0 10.8 .6 16 1.6c36.5 7.4 64 39.7 64 78.4l0 224c0 38.7-27.5 71-64 78.4c-5.2 1-10.5 1.6-16 1.6L80 448c-5.5 0-10.8-.6-16-1.6C27.5 439 0 406.7 0 368L0 144zM64 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm42.7-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm42.7-96a42.7 42.7 0 1 0 85.3 0 42.7 42.7 0 1 0 -85.3 0zM256 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm21.3-96c0 .6 0 .3 0 0zm0 192c0 .6 0 .3 0 0z" />
        <path d="M112.3 0C85.6 0 64 21.6 64 48.3l0 17.3c5.2-1 10.5-1.6 16-1.6l224 0c5.5 0 10.8 .6 16 1.6l0-17.3C320 21.6 298.4 0 271.7 0L112.3 0zM64 464c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-17.6c-5.2 1-10.5 1.6-16 1.6L80 448c-5.5 0-10.8-.6-16-1.6L64 464zm181.3-80a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default WatchApple;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=duotone play-pause}
 * @preview ![play-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/play-pause.svg)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128 0l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M116.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S64 83.6 64 96l0 320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6l-192-160z" />
    </Icon>
);

export default PlayPause;
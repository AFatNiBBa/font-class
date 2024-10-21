
import { Icon } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=light play-pause}
 * @preview ![play-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/play-pause.svg)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 352c0 8.8 7.2 16 16 16s16-7.2 16-16l0-352zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 352c0 8.8 7.2 16 16 16s16-7.2 16-16l0-352zM288 256L96 416 96 96 288 256zM116.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S64 83.6 64 96l0 320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6l-192-160z" />
    </Icon>
);

export default PlayPause;
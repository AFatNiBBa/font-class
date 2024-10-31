
import { Icon } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=regular play-pause}
 * @preview ![play-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/play-pause.svg)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 336c0 13.3 10.7 24 24 24s24-10.7 24-24l0-336zm144 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 336c0 13.3 10.7 24 24 24s24-10.7 24-24l0-336zM112 381.8l0-251.7L263 256 112 381.8zm4.5-310.4c-9.5-7.9-22.8-9.7-34.1-4.4S64 83.6 64 96l0 320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6l-192-160z" />
    </Icon>
);

export default PlayPause;

import { Icon } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=sharp-light play-pause}
 * @preview ![play-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/play-pause.svg)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 448l0-40 0-304 0-40L96 88 293.3 236 320 256l-26.7 20L96 424 64 448zM266.7 256L96 128l0 256L266.7 256zM448 80l0 352 0 16-32 0 0-16 0-352 0-16 32 0 0 16zm128 0l0 352 0 16-32 0 0-16 0-352 0-16 32 0 0 16z" />
    </Icon>
);

export default PlayPause;
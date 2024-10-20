
import { Icon } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=sharp-regular play-pause}
 * @preview ![play-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/play-pause.svg)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 448l0-60 0-264 0-60 48 36L280 226l40 30-40 30L112 412 64 448zM240 256L112 160l0 192 128-96zM432 88l0 336 0 24-48 0 0-24 0-336 0-24 48 0 0 24zm144 0l0 336 0 24-48 0 0-24 0-336 0-24 48 0 0 24z" />
    </Icon>
);

export default PlayPause;
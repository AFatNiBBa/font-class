
import { Icon } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=sharp-thin play-pause}
 * @preview ![play-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/play-pause.svg)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 448l0-20L64 84l0-20L80 76 306.7 246 320 256l-13.3 10L80 436 64 448zM293.3 256L80 96l0 320L293.3 256zM432 72l0 368 0 8-16 0 0-8 0-368 0-8 16 0 0 8zm144 0l0 368 0 8-16 0 0-8 0-368 0-8 16 0 0 8z" />
    </Icon>
);

export default PlayPause;
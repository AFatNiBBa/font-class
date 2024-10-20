
import { Icon } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=sharp-solid play-pause}
 * @preview ![play-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/play-pause.svg)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 256L64 448 64 64 320 256zM448 96l0 320 0 32-64 0 0-32 0-320 0-32 64 0 0 32zm128 0l0 320 0 32-64 0 0-32 0-320 0-32 64 0 0 32z" />
    </Icon>
);

export default PlayPause;
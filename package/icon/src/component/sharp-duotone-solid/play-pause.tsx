
import { Icon, generic } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=sharp-duotone-solid play-pause}
 * @preview ![play-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/play-pause.svg)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0zm128 0l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
        <path d="M64 64V448L320 256 64 64z" />
    </Icon>
);

export default PlayPause;
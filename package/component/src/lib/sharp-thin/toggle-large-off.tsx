
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=sharp-thin toggle-large-off}
 * @preview ![toggle-large-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/toggle-large-off.svg)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 112l288 0 0 288L16 400l0-288zM304 416l16 0 240 0 16 0 0-16 0-288 0-16-16 0L320 96l-16 0L16 96 0 96l0 16L0 400l0 16 16 0 288 0zm16-16l0-288 240 0 0 288-240 0zM80 176l160 0 0 160L80 336l0-160zM64 160l0 16 0 160 0 16 16 0 160 0 16 0 0-16 0-160 0-16-16 0L80 160l-16 0z" />
    </Icon>
);

export default ToggleLargeOff;
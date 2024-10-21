
import { Icon } from "../../index";

/**
 * A component that renders the `compass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=sharp-thin compass}
 * @preview ![compass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/compass.svg)
 */
const Compass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm51.4-204.6L153.3 358.7l51.4-154.1 154.1-51.4L307.4 307.4zm57.7-173L192 192 134.3 365 128 384l19-6.3L320 320l57.7-173 6.3-19-19 6.3zM240 256a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Compass;

import { Icon } from "../../index";

/**
 * A component that renders the `road-spikes` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-spikes?s=sharp-solid road-spikes}
 * @preview ![road-spikes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/road-spikes.svg)
 */
const RoadSpikes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 96l0 256 128 0 64 0 64 0 64 0 64 0 64 0 128 0L448 96l-32 0 0 153.6L320 96l-32 0 0 153.6L192 96l-32 0 0 153.6L64 96 32 96zM0 384l0 64 32 0 576 0 32 0 0-64-32 0L32 384 0 384z" />
    </Icon>
);

export default RoadSpikes;
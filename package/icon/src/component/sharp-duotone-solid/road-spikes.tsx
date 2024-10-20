
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-spikes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-spikes?s=sharp-duotone-solid road-spikes}
 * @preview ![road-spikes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/road-spikes.svg)
 */
const RoadSpikes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 288 128 0 96 0 32 0 96 0 32 0 96 0 96 0 32 0L448 96l-32 0 0 144L320 96l-32 0 0 144L192 96l-32 0 0 144L64 96 32 96z" />
        <path d="M0 384l32 0 576 0 32 0 0 64-32 0L32 448 0 448l0-64z" />
    </Icon>
);

export default RoadSpikes;
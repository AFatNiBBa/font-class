
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-spikes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-spikes?s=duotone road-spikes}
 * @preview ![road-spikes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/road-spikes.svg)
 */
const RoadSpikes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 114.8L32 384l128 0 34.5 0 93.5 0 34.5 0 93.5 0 34.5 0L608 384c0-29.8-9.2-58.8-26.2-83.2L445.1 105.6c-9-12.8-29.1-6.5-29.1 9.2l0 132.1L317.1 105.6c-9-12.8-29.1-6.5-29.1 9.2l0 132.1L189.1 105.6c-9-12.8-29.1-6.5-29.1 9.2l0 132.1L61.1 105.6c-9-12.8-29.1-6.5-29.1 9.2z" />
        <path d="M0 416c0-17.7 14.3-32 32-32l576 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default RoadSpikes;
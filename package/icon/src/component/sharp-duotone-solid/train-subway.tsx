
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train-subway` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-subway?s=sharp-duotone-solid train-subway}
 * @preview ![train-subway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/train-subway.svg)
 */
const TrainSubway: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M2.8 512l22.6-22.6L66.7 448l90.5 0-64 64L2.8 512zM64 96l144 0 0 160L64 256 64 96zm176 0l144 0 0 160-144 0 0-160zm50.7 352l90.5 0 41.4 41.4L445.3 512l-90.5 0-64-64z" />
        <path d="M0 0L448 0l0 448L0 448 0 0zM64 96l0 160 144 0 0-160L64 96zm320 0L240 96l0 160 144 0 0-160zM128 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm224 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default TrainSubway;
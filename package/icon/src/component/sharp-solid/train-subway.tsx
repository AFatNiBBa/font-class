
import { Icon } from "../../index";

/**
 * A component that renders the `train-subway` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-subway?s=sharp-solid train-subway}
 * @preview ![train-subway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/train-subway.svg)
 */
const TrainSubway: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 0L0 0 0 448l66.7 0L25.4 489.4 2.8 512l90.5 0 64-64 133.5 0 64 64 90.5 0-22.6-22.6L381.3 448l66.7 0L448 0zM208 96l0 160L64 256 64 96l144 0zm32 0l144 0 0 160-144 0 0-160zM96 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm224 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default TrainSubway;
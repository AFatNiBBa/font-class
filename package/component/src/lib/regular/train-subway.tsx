
import { Icon } from "../../index";

/**
 * A component that renders the `train-subway` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-subway?s=regular train-subway}
 * @preview ![train-subway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/train-subway.svg)
 */
const TrainSubway: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M200 48l0 160L48 208 48 96c0-26.5 21.5-48 48-48l104 0zm48 0l104 0c26.5 0 48 21.5 48 48l0 112-152 0 0-160zM48 352l0-96 352 0 0 96c0 26.5-21.5 48-48 48L96 400c-26.5 0-48-21.5-48-48zM96 0C43 0 0 43 0 96L0 352c0 42.8 28 79 66.6 91.4L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 188.1 0 57 57c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-27.6-27.6C420 431 448 394.8 448 352l0-256c0-53-43-96-96-96L96 0zm32 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm224-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default TrainSubway;
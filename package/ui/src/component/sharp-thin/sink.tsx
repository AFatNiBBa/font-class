
import { Icon } from "../../index";

/**
 * A component that renders the `sink` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sink?s=sharp-thin sink}
 * @preview ![sink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sink.svg)
 */
const Sink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 72c0-30.9 25.1-56 56-56s56 25.1 56 56l0 48 0 8 16 0 0-8 0-48c0-39.8-32.2-72-72-72s-72 32.2-72 72l0 216-104 0 0-56 0-8-8 0-96 0-8 0 0 16 8 0 88 0 0 48L8 288l-8 0 0 8 0 48 0 8 8 0 496 0 8 0 0-8 0-48 0-8-8 0-120 0 0-48 88 0 8 0 0-16-8 0-96 0-8 0 0 8 0 56-104 0 0-216zM16 304l112 0 16 0 104 0 16 0 104 0 16 0 112 0 0 32L16 336l0-32zm16 80l0 24c0 57.4 46.6 104 104 104l240 0c57.4 0 104-46.6 104-104l0-24-16 0 0 24c0 48.6-39.4 88-88 88l-240 0c-48.6 0-88-39.4-88-88l0-24-16 0z" />
    </Icon>
);

export default Sink;
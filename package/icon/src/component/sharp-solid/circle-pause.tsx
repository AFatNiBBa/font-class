
import { Icon } from "../../index";

/**
 * A component that renders the `circle-pause` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-pause?s=sharp-solid circle-pause}
 * @preview ![circle-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-pause.svg)
 */
const CirclePause: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192l0 128 0 32-64 0 0-32 0-128 0-32 64 0 0 32zm128 0l0 128 0 32-64 0 0-32 0-128 0-32 64 0 0 32z" />
    </Icon>
);

export default CirclePause;
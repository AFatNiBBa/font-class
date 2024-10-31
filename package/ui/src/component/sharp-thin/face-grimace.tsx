
import { Icon } from "../../index";

/**
 * A component that renders the `face-grimace` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grimace?s=sharp-thin face-grimace}
 * @preview ![face-grimace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-grimace.svg)
 */
const FaceGrimace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM128 304l0 80 48 0 0-80-48 0zm64 0l0 80 56 0 0-80-56 0zm128 80l0-80-56 0 0 80 56 0zm16 0l48 0 0-80-48 0 0 80zM128 288l256 0 16 0 0 16 0 80 0 16-16 0-256 0-16 0 0-16 0-80 0-16 16 0zm32.4-80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default FaceGrimace;
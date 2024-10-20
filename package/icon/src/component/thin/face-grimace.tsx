
import { Icon } from "../../index";

/**
 * A component that renders the `face-grimace` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grimace?s=thin face-grimace}
 * @preview ![face-grimace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-grimace.svg)
 */
const FaceGrimace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM168 304c-22.1 0-40 17.9-40 40s17.9 40 40 40l8 0 0-80-8 0zm24 80l56 0 0-80-56 0 0 80zm128 0l0-80-56 0 0 80 56 0zm16 0l8 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-8 0 0 80zM168 288l176 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-176 0c-30.9 0-56-25.1-56-56s25.1-56 56-56zm-7.6-80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default FaceGrimace;
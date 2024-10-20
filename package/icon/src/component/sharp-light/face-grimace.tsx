
import { Icon } from "../../index";

/**
 * A component that renders the `face-grimace` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grimace?s=sharp-light face-grimace}
 * @preview ![face-grimace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-grimace.svg)
 */
const FaceGrimace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM144 320l0 48 32 0 0-48-32 0zm64 0l0 48 32 0 0-48-32 0zm96 48l0-48-32 0 0 48 32 0zm32 0l32 0 0-48-32 0 0 48zM144 288l224 0 32 0 0 32 0 48 0 32-32 0-224 0-32 0 0-32 0-48 0-32 32 0zm8.4-80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FaceGrimace;
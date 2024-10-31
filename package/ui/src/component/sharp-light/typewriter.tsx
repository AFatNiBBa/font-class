
import { Icon } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=sharp-light typewriter}
 * @preview ![typewriter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/typewriter.svg)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0l0 16 0 144 32 0L96 32l273.4 0L416 78.6l0 81.4 32 0 0-88 0-6.6-4.7-4.7-56-56L382.6 0 376 0 80 0 64 0zM333.3 256l9.4-9.4L365.3 224 480 224l0 64-32 0L64 288l-32 0 0-64 114.7 0 22.6 22.6 9.4 9.4 13.3 0 128 0 13.3 0zM480 320l32 0 0-32 0-64 0-32-32 0-128 0-32 32-128 0-32-32L32 192 0 192l0 32 0 64 0 32 32 0 0 160 0 32 32 0 384 0 32 0 0-32 0-160zm-32 0l0 160L64 480l0-160 384 0zM160 416l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-192 0zm-48-64l0 32 32 0 0-32-32 0zm96 32l0-32-32 0 0 32 32 0zm32-32l0 32 32 0 0-32-32 0zm96 32l0-32-32 0 0 32 32 0zm32-32l0 32 32 0 0-32-32 0z" />
    </Icon>
);

export default Typewriter;
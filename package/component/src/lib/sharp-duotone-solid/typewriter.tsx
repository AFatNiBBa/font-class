
import { Icon, generic } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=sharp-duotone-solid typewriter}
 * @preview ![typewriter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/typewriter.svg)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0L96 0 352 0l0 96 96 0 0 96-96 0-32 32-128 0-32-32-96 0L64 32 64 0z" />
        <path d="M448 80l0 16-96 0 0-96 16 0 13.3 0 9.4 9.4 48 48 9.4 9.4L448 80zM0 288l0-96 160 0 32 32 128 0 32-32 160 0 0 96-32 0 0 224L32 512l0-224L0 288zm400 0l0 32 32 0 0-32-32 0zm-64 32l32 0 0-32-32 0 0 32zm-64-32l0 32 32 0 0-32-32 0zm-64 0l0 32 32 0 0-32-32 0zm-64 0l0 32 32 0 0-32-32 0zm-64 0l0 32 32 0 0-32-32 0zm64 128l0 32 16 0 192 0 16 0 0-32-16 0-192 0-16 0zm0-64l-32 0 0 32 32 0 0-32zm32 0l0 32 32 0 0-32-32 0zm96 0l-32 0 0 32 32 0 0-32zm32 0l0 32 32 0 0-32-32 0zm96 0l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default Typewriter;
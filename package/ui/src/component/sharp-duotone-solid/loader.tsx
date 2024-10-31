
import { Icon, generic } from "../../index";

/**
 * A component that renders the `loader` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loader?s=sharp-duotone-solid loader}
 * @preview ![loader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/loader.svg)
 */
const Loader: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M52.4 414.4l45.3 45.3L120.2 437l45.3-45.3 22.6-22.6-45.3-45.3-22.6 22.6L75 391.8 52.4 414.4zM224 384l0 32 0 64 0 32 64 0 0-32 0-64 0-32-64 0zm99.9-241.1l45.3 45.3 22.6-22.6L437 120.2l22.6-22.6L414.4 52.3 391.8 75l-45.3 45.3-22.6 22.6zm0 226.3l22.6 22.6L391.8 437l22.6 22.6 45.3-45.3L437 391.8l-45.3-45.3-22.6-22.6-45.3 45.3zM384 224l0 64 32 0 64 0 32 0 0-64-32 0-64 0-32 0z" />
        <path d="M288 0L224 0l0 32 0 64 0 32 64 0 0-32 0-64 0-32zM0 224l0 64 32 0 64 0 32 0 0-64-32 0-64 0L0 224zM120.2 75L97.6 52.4 52.4 97.6 75 120.2l45.3 45.3 22.6 22.6 45.3-45.3-22.6-22.6L120.2 75z" />
    </Icon>
);

export default Loader;

import { Icon } from "../../index";

/**
 * A component that renders the `loader` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loader?s=sharp-solid loader}
 * @preview ![loader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/loader.svg)
 */
const Loader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0-32L224 0l0 32 0 64 0 32 64 0 0-32 0-64zm0 384l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64zM0 224l0 64 32 0 64 0 32 0 0-64-32 0-64 0L0 224zm416 0l-32 0 0 64 32 0 64 0 32 0 0-64-32 0-64 0zM97.6 52.4L52.4 97.6 75 120.2l45.3 45.3 22.6 22.6 45.3-45.3-22.6-22.6L120.2 75 97.6 52.4zM391.8 346.5l-22.6-22.6-45.3 45.3 22.6 22.6L391.8 437l22.6 22.6 45.3-45.3L437 391.8l-45.3-45.3zM52.4 414.4l45.3 45.3L120.2 437l45.3-45.3 22.6-22.6-45.3-45.3-22.6 22.6L75 391.8 52.4 414.4zM346.5 120.2l-22.6 22.6 45.3 45.3 22.6-22.6L437 120.2l22.6-22.6L414.4 52.3 391.8 75l-45.3 45.3z" />
    </Icon>
);

export default Loader;
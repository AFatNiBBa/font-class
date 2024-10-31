
import { Icon } from "../../index";

/**
 * A component that renders the `loader` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loader?s=sharp-regular loader}
 * @preview ![loader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/loader.svg)
 */
const Loader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0-24L232 0l0 24 0 80 0 24 48 0 0-24 0-80zm0 384l0-24-48 0 0 24 0 80 0 24 48 0 0-24 0-80zM0 232l0 48 24 0 80 0 24 0 0-48-24 0-80 0L0 232zm408 0l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-80 0zM454 92L420 58l-17 17-56.6 56.6-17 17 33.9 33.9 17-17L437 108.9l17-17zM165.5 380.4l17-17-33.9-33.9-17 17L75 403.1 58 420 92 454l17-17 56.6-56.6zM92 58L58 92l17 17 56.6 56.6 17 17 33.9-33.9-17-17L108.9 75 92 58zM380.5 346.5l-17-17-33.9 33.9 17 17L403.1 437l17 17L454 420l-17-17-56.6-56.6z" />
    </Icon>
);

export default Loader;
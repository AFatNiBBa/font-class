
import { Icon } from "../../index";

/**
 * A component that renders the `peace` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peace?s=thin peace}
 * @preview ![peace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/peace.svg)
 */
const Peace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 495.9l0-222.8L76.8 415.7C119.2 463.1 180 493.6 248 495.9zM66.6 403.4L248 252.3l0-236.1C119.2 20.4 16 126.1 16 256c0 55.6 18.9 106.7 50.6 147.4zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm179.2-96.3L264 273.1l0 222.8c68-2.2 128.8-32.7 171.2-80.2zm10.2-12.3C477.1 362.7 496 311.6 496 256C496 126.1 392.8 20.4 264 16.1l0 236.1L445.4 403.4z" />
    </Icon>
);

export default Peace;
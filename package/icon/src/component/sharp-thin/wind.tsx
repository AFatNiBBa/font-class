
import { Icon } from "../../index";

/**
 * A component that renders the `wind` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind?s=sharp-thin wind}
 * @preview ![wind](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wind.svg)
 */
const Wind: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 16 8 0 64 0c39.8 0 72 32.2 72 72s-32.2 72-72 72L8 160l-8 0 0 16 8 0 352 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L296 0l-8 0zm64 416l8 0 68 0c46.4 0 84-37.6 84-84s-37.6-84-84-84L8 248l-8 0 0 16 8 0 420 0c37.6 0 68 30.4 68 68s-30.4 68-68 68l-68 0-8 0 0 16zM104 512l64 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L8 336l-8 0 0 16 8 0 160 0c39.8 0 72 32.2 72 72s-32.2 72-72 72l-64 0-8 0 0 16 8 0z" />
    </Icon>
);

export default Wind;
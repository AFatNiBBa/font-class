
import { Icon } from "../../index";

/**
 * A component that renders the `wind` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind?s=light wind}
 * @preview ![wind](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wind.svg)
 */
const Wind: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 16c0 8.8 7.2 16 16 16l64 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L16 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l352 0c44.2 0 80-35.8 80-80s-35.8-80-80-80L304 0c-8.8 0-16 7.2-16 16zm64 384c0 8.8 7.2 16 16 16l56 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l408 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-56 0c-8.8 0-16 7.2-16 16zM112 512l64 0c44.2 0 80-35.8 80-80s-35.8-80-80-80L16 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
    </Icon>
);

export default Wind;
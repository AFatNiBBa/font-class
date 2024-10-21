
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs-simple?s=sharp-regular crosshairs-simple}
 * @preview ![crosshairs-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/crosshairs-simple.svg)
 */
const CrosshairsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M462.6 232L392 232l-24 0 0 48 24 0 70.6 0c-11 95.7-86.9 171.6-182.6 182.6l0-22.6 0-48 0-24-48 0 0 24 0 48 0 22.6C136.3 451.6 60.4 375.7 49.4 280l70.6 0 24 0 0-48-24 0-70.6 0C60.4 136.3 136.3 60.4 232 49.4l0 70.6 0 24 48 0 0-24 0-70.6c95.7 11 171.6 86.9 182.6 182.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default CrosshairsSimple;
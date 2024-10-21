
import { Icon } from "../../index";

/**
 * A component that renders the `brightness-low` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness-low?s=sharp-regular brightness-low}
 * @preview ![brightness-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/brightness-low.svg)
 */
const BrightnessLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 48l0 64 64 0 0-64-64 0zm32 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM173.3 128L128 82.7 82.7 128 128 173.3 173.3 128zM48 288l64 0 0-64-64 0 0 64zm80 141.3L173.3 384 128 338.7 82.7 384 128 429.3zM288 400l-64 0 0 64 64 0 0-64zm96-61.3L338.7 384 384 429.3 429.3 384 384 338.7zM400 224l0 64 64 0 0-64-64 0zm-16-50.7L429.3 128 384 82.7 338.7 128 384 173.3z" />
    </Icon>
);

export default BrightnessLow;
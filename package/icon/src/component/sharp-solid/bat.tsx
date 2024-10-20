
import { Icon } from "../../index";

/**
 * A component that renders the `bat` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bat?s=sharp-solid bat}
 * @preview ![bat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bat.svg)
 */
const Bat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 48l32 32 64 0 32-32 27.9 111.7L480 112c61.9 72.3 96 164.3 96 259.5l0 28.5-96-48-48 80-64-64L288 480 208 368l-64 64L96 352 0 400l0-28.5C0 276.3 34.1 184.3 96 112l100.1 47.7L224 48z" />
    </Icon>
);

export default Bat;
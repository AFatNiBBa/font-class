
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bat?s=sharp-duotone-solid bat}
 * @preview ![bat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bat.svg)
 */
const Bat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M196.1 159.7c8.2 3.9 16.3 7.8 24.5 11.7c6.4 3.1 13.5 4.7 20.6 4.7l93.5 0c7.1 0 14.2-1.6 20.6-4.7l24.5-11.7L352 48 320 80l-64 0L224 48 196.1 159.7z" />
        <path d="M334.8 176H241.2c-7.1 0-14.2-1.6-20.6-4.7L96 112C34.1 184.3 0 276.3 0 371.5V400l96-48 48 80 64-64 80 112 80-112 64 64 48-80 96 48V371.5c0-95.2-34.1-187.2-96-259.5L355.4 171.3c-6.4 3.1-13.5 4.7-20.6 4.7z" />
    </Icon>
);

export default Bat;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=sharp-duotone-solid bullhorn}
 * @preview ![bullhorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bullhorn.svg)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 128l0 192 0 32c81.3 0 158.7 35.1 212.3 96.3L432 480l48 0 0-179.6 0-120.7L480 0 432 0 404.3 31.7C350.7 92.9 273.3 128 192 128z" />
        <path d="M0 128l192 0 0 192 0 32 0 160L64 512l0-160L0 352 0 128zM512 240c0 27.9-13.4 51.6-32 60.4l0-120.7c18.6 8.8 32 32.5 32 60.4z" />
    </Icon>
);

export default Bullhorn;
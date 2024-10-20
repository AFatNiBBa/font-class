
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pi` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=sharp-duotone-solid pi}
 * @preview ![pi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pi.svg)
 */
const Pi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 64L0 64l0 64 32 0 64 0 0 217.8L66.3 420.1l59.4 23.8 32-80 2.3-5.7 0-6.2 0-224 128 0 0 288 0 32 32 0 80 0 23.1 0 7.3-21.9 16-48-60.7-20.2L376.9 384 352 384l0-256 64 0 32 0 0-64-32 0L32 64z" />
    </Icon>
);

export default Pi;
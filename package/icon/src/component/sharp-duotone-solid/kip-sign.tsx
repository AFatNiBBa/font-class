
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kip-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kip-sign?s=sharp-duotone-solid kip-sign}
 * @preview ![kip-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/kip-sign.svg)
 */
const KipSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 32 0 0-32 0-32-32 0L0 224zm147 32c13.2 10.7 26.5 21.3 39.7 32L352 288l32 0 0-64-32 0-165.3 0L147 256z" />
        <path d="M64 256L64 64l0-32 64 0 0 32 0 125.1 195.9-158 40.2 49.8L147 256 364.1 431.1l-40.2 49.8L128 322.9 128 448l0 32-64 0 0-32 0-192z" />
    </Icon>
);

export default KipSign;
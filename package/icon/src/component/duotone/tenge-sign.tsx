
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=duotone tenge-sign}
 * @preview ![tenge-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tenge-sign.svg)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 17.7 14.3 32 32 32l128 0 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0L32 160c-17.7 0-32 14.3-32 32z" />
        <path d="M0 64C0 46.3 14.3 32 32 32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default TengeSign;
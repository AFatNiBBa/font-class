
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rupiah-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rupiah-sign?s=duotone rupiah-sign}
 * @preview ![rupiah-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rupiah-sign.svg)
 */
const RupiahSign: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 192c0-17.7 14.3-32 32-32l80 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-48 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128 0-160zm64 32l0 96 48 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-48 0z" />
        <path d="M32 32C14.3 32 0 46.3 0 64L0 288 0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 42.3 0 56 139.9c6.6 16.4 25.2 24.4 41.6 17.8s24.4-25.2 17.8-41.6L170.3 307.7C220.8 285.3 256 234.8 256 176c0-79.5-64.5-144-144-144L32 32zm80 224l-48 0L64 96l48 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default RupiahSign;
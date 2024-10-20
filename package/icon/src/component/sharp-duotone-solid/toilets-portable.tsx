
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilets-portable` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilets-portable?s=sharp-duotone-solid toilets-portable}
 * @preview ![toilets-portable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toilets-portable.svg)
 */
const ToiletsPortable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 88 0 488l0 24 48 0 0-24 0-8 160 0 0 8 0 24 48 0 0-24 0-400 0-24-24 0L24 64 0 64zM176 224l32 0 0 16 0 64 0 16-32 0 0-16 0-64 0-16zM320 64l0 24 0 400 0 24 48 0 0-24 0-8 160 0 0 8 0 24 48 0 0-24 0-400 0-24-24 0-8 0L352 64l-8 0-24 0zM496 224l32 0 0 16 0 64 0 16-32 0 0-16 0-64 0-16z" />
        <path d="M256 0L0 0 0 64l256 0 0-64zM576 0L320 0l0 64 256 0 0-64zM208 224l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zm320 16l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64z" />
    </Icon>
);

export default ToiletsPortable;
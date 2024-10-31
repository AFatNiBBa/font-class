
import { Icon } from "../../index";

/**
 * A component that renders the `inhaler` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inhaler?s=sharp-solid inhaler}
 * @preview ![inhaler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/inhaler.svg)
 */
const Inhaler: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 72L416 32l-20.8 78L528.7 243.4 576 72zM536.6 296.6L364.2 124.2 337.3 224 192 224l0 256 294.6 0 50-183.4zM64 256A32 32 0 1 0 0 256a32 32 0 1 0 64 0zm0 96A32 32 0 1 0 0 352a32 32 0 1 0 64 0zm64-16a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM64 448A32 32 0 1 0 0 448a32 32 0 1 0 64 0zm64-16a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Inhaler;
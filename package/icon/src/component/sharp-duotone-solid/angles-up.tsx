
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up?s=sharp-duotone-solid angles-up}
 * @preview ![angles-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/angles-up.svg)
 */
const AnglesUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M18.7 416L64 461.3l22.6-22.6L224 301.3 361.4 438.6 384 461.3 429.3 416l-22.6-22.6-160-160L224 210.7l-22.6 22.6-160 160L18.7 416z" />
        <path d="M224 18.7l22.6 22.6 160 160L429.3 224 384 269.3l-22.6-22.6L224 109.3 86.6 246.6 64 269.3 18.7 224l22.6-22.6 160-160L224 18.7z" />
    </Icon>
);

export default AnglesUp;
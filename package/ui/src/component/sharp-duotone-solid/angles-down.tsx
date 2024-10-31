
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-down?s=sharp-duotone-solid angles-down}
 * @preview ![angles-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/angles-down.svg)
 */
const AnglesDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M18.7 96l22.6 22.6 160 160L224 301.3l22.6-22.6 160-160L429.3 96 384 50.7 361.4 73.4 224 210.7 86.6 73.4 64 50.7 18.7 96z" />
        <path d="M224 493.3l22.6-22.6 160-160L429.3 288 384 242.7l-22.6 22.6L224 402.7 86.6 265.4 64 242.7 18.7 288l22.6 22.6 160 160L224 493.3z" />
    </Icon>
);

export default AnglesDown;
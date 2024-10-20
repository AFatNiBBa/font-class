
import { Icon, generic } from "../../index";

/**
 * A component that renders the `litecoin-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/litecoin-sign?s=duotone litecoin-sign}
 * @preview ![litecoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/litecoin-sign.svg)
 */
const LitecoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M1.2 264.8C5.2 278.8 18.1 288 32 288c2.9 0 5.9-.4 8.8-1.2L64 280.1c0-22.2 0-44.4 0-66.6L23.2 225.2c-17 4.9-26.8 22.6-22 39.6zM128 195.3l0 66.6 136.8-39.1c14.1-4 23.2-16.8 23.2-30.8c0-2.9-.4-5.9-1.2-8.8c-4.9-17-22.6-26.8-39.6-22L128 195.3z" />
        <path d="M96 32c17.7 0 32 14.3 32 32l0 352 224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 480c-17.7 0-32-14.3-32-32L64 64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default LitecoinSign;
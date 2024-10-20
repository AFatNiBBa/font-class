
import { Icon, generic } from "../../index";

/**
 * A component that renders the `litecoin-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/litecoin-sign?s=sharp-duotone-solid litecoin-sign}
 * @preview ![litecoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/litecoin-sign.svg)
 */
const LitecoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M8.4 229.4L26 291l30.8-8.8 7.2-2.1c0-22.2 0-44.4 0-66.6l-24.8 7.1L8.4 229.4zM128 195.3l0 66.6 136.8-39.1 30.8-8.8L278 152.4l-30.8 8.8L128 195.3z" />
        <path d="M128 32l0 32 0 352 224 0 32 0 0 64-32 0L96 480l-32 0 0-32L64 64l0-32 64 0z" />
    </Icon>
);

export default LitecoinSign;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `transformer-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transformer-bolt?s=sharp-duotone-solid transformer-bolt}
 * @preview ![transformer-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/transformer-bolt.svg)
 */
const TransformerBolt: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M48 32l0 32 16 0 24 0 48 0 24 0 16 0 0-32-16 0-24 0 0-8 0-24L88 0l0 24 0 8L64 32 48 32zm0 64l0 32 16 0 96 0 16 0 0-32-16 0L64 96 48 96zM96 352l70.5 5c-7.5 35.7-15 71.3-22.5 107L288 320l-70.5-5L240 208 96 352zM208 32l0 32 16 0 24 0 48 0 24 0 16 0 0-32-16 0-24 0 0-8 0-24L248 0l0 24 0 8-24 0-16 0zm0 64l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
        <path d="M0 160l32 0 320 0 32 0 0 64-32 0 0 224 32 0 0 64-32 0L32 512 0 512l0-64 32 0 0-224L0 224l0-64zm240 48L96 352l70.5 5L144 464 288 320l-70.5-5L240 208z" />
    </Icon>
);

export default TransformerBolt;
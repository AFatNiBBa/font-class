
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-inner` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-inner?s=sharp-duotone-solid border-inner}
 * @preview ![border-inner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/border-inner.svg)
 */
const BorderInner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l64 0 0-64L0 32zm0 96l0 64 64 0 0-64L0 128zM0 320l0 64 64 0 0-64L0 320zm0 96l0 64 64 0 0-64L0 416zM96 32l0 64 64 0 0-64L96 32zm0 384l0 64 64 0 0-64-64 0zM288 32l0 64 64 0 0-64-64 0zm0 384l0 64 64 0 0-64-64 0zM384 32l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0z" />
        <path d="M192 448l0 32 64 0 0-32 0-160 160 0 32 0 0-64-32 0-160 0 0-160 0-32-64 0 0 32 0 160L32 224 0 224l0 64 32 0 160 0 0 160z" />
    </Icon>
);

export default BorderInner;
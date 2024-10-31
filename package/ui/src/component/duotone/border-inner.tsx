
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-inner` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-inner?s=duotone border-inner}
 * @preview ![border-inner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/border-inner.svg)
 */
const BorderInner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64a32 32 0 1 0 64 0A32 32 0 1 0 0 64zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 160zM0 352a32 32 0 1 0 64 0A32 32 0 1 0 0 352zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 448zM96 64a32 32 0 1 0 64 0A32 32 0 1 0 96 64zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM288 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM384 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M192 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160z" />
    </Icon>
);

export default BorderInner;
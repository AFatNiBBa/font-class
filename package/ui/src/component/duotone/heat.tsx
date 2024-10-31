
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heat?s=duotone heat}
 * @preview ![heat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/heat.svg)
 */
const Heat: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M144 64l0 80c0 48.5 15.7 95.6 44.8 134.4L208 304c20.8 27.7 32 61.4 32 96l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-48.5-15.7-95.6-44.8-134.4L240 240c-20.8-27.7-32-61.4-32-96l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M64 128c0-17.7-14.3-32-32-32S0 110.3 0 128l0 32c0 48.5 15.7 95.6 44.8 134.4L64 320c20.8 27.7 32 61.4 32 96l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-48.5-15.7-95.6-44.8-134.4L96 256c-20.8-27.7-32-61.4-32-96l0-32zm288 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32c0 48.5 15.7 95.6 44.8 134.4L352 320c20.8 27.7 32 61.4 32 96l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-48.5-15.7-95.6-44.8-134.4L384 256c-20.8-27.7-32-61.4-32-96l0-32z" />
    </Icon>
);

export default Heat;
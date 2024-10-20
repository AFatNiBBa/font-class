
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heat?s=sharp-duotone-solid heat}
 * @preview ![heat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/heat.svg)
 */
const Heat: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M144 32l0 32 0 80c0 48.5 15.7 95.6 44.8 134.4L208 304c20.8 27.7 32 61.4 32 96l0 48 0 32 64 0 0-32 0-48c0-48.5-15.7-95.6-44.8-134.4L240 240c-20.8-27.7-32-61.4-32-96l0-80 0-32-64 0z" />
        <path d="M64 128l0-32L0 96l0 32 0 32c0 48.5 15.7 95.6 44.8 134.4L64 320c20.8 27.7 32 61.4 32 96l0 32 0 32 64 0 0-32 0-32c0-48.5-15.7-95.6-44.8-134.4L96 256c-20.8-27.7-32-61.4-32-96l0-32zm288 0l0-32-64 0 0 32 0 32c0 48.5 15.7 95.6 44.8 134.4L352 320c20.8 27.7 32 61.4 32 96l0 32 0 32 64 0 0-32 0-32c0-48.5-15.7-95.6-44.8-134.4L384 256c-20.8-27.7-32-61.4-32-96l0-32z" />
    </Icon>
);

export default Heat;
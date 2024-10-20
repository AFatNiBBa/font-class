
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fort` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fort?s=sharp-duotone-solid fort}
 * @preview ![fort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fort.svg)
 */
const Fort: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L64 0l0 64 32 0L96 0l64 0 0 64 32 0 0-64 64 0 0 64 0 64 0 32 0 32-32 32L32 224 0 192l0-64L0 64 0 0zM384 0l64 0 0 64 32 0 0-64 64 0 0 64 32 0 0-64 64 0 0 64 0 64 0 64-32 32-192 0-32-32 0-32 0-32 0-64 0-64z" />
        <path d="M384 160l-128 0 0 32-32 32L32 224l0 288 224 0 0-128c0-35.3 28.7-64 64-64s64 28.7 64 64l0 128 224 0 0-288-192 0-32-32 0-32z" />
    </Icon>
);

export default Fort;
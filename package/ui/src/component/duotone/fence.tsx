
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fence` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=duotone fence}
 * @preview ![fence](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fence.svg)
 */
const Fence: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 160l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0zM320 160l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0z" />
        <path d="M76.8 38.4C73.8 34.4 69 32 64 32s-9.8 2.4-12.8 6.4L6.4 98.1C2.2 103.7 0 110.4 0 117.3L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-330.7c0-6.9-2.2-13.7-6.4-19.2L76.8 38.4zm192 0c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4L198.4 98.1c-4.2 5.5-6.4 12.3-6.4 19.2L192 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-330.7c0-6.9-2.2-13.7-6.4-19.2L268.8 38.4zM448 32c-5 0-9.8 2.4-12.8 6.4L390.4 98.1c-4.2 5.5-6.4 12.3-6.4 19.2L384 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-330.7c0-6.9-2.2-13.7-6.4-19.2L460.8 38.4c-3-4-7.8-6.4-12.8-6.4z" />
    </Icon>
);

export default Fence;
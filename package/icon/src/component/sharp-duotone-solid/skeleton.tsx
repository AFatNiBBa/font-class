
import { Icon, generic } from "../../index";

/**
 * A component that renders the `skeleton` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton?s=sharp-duotone-solid skeleton}
 * @preview ![skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/skeleton.svg)
 */
const Skeleton: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160l0 64 32 0 192 0 0-64L32 160 0 160zM64 64l0 64 32 0 128 0 0-64L96 64 64 64zM96 256l0 64 32 0 96 0 0-64-96 0-32 0zM288 64l0 64 128 0 32 0 0-64-32 0L288 64zm0 96l0 64 192 0 32 0 0-64-32 0-192 0zm0 96l0 64 96 0 32 0 0-64-32 0-96 0z" />
        <path d="M288 0l0 32 0 352 0 2.3L368 352l80 0 0 96-64 64-256 0L64 448l0-96 80 0 80 34.3 0-2.3 0-352 0-32 64 0zM184 440a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm192 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Skeleton;
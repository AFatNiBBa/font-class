
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sink` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sink?s=sharp-duotone-solid sink}
 * @preview ![sink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sink.svg)
 */
const Sink: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 64 32 0 448 0 32 0 0-64-32 0-80 0-48 0-64 0-64 0-64 0-48 0-80 0L0 288zm32 96l0 32c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-32L32 384z" />
        <path d="M288 96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 64 0 0-32c0-53-43-96-96-96s-96 43-96 96l0 192 64 0 0-192zM56 208l-24 0 0 48 24 0 56 0 0 32 48 0 0-56 0-24-24 0-80 0zm320 0l-24 0 0 24 0 56 48 0 0-32 64 0 24 0 0-48-24 0-88 0z" />
    </Icon>
);

export default Sink;
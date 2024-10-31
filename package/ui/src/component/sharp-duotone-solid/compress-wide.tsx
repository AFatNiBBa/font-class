
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compress-wide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=sharp-duotone-solid compress-wide}
 * @preview ![compress-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/compress-wide.svg)
 */
const CompressWide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0L0 288zM352 64l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64 0-32-64 0z" />
        <path d="M160 96l0-32L96 64l0 32 0 64-64 0L0 160l0 64 32 0 96 0 32 0 0-32 0-96zM352 416l0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0-96 0-32 0 0 32 0 96z" />
    </Icon>
);

export default CompressWide;
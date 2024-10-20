
import { Icon } from "../../index";

/**
 * A component that renders the `compress-wide` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=sharp-solid compress-wide}
 * @preview ![compress-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/compress-wide.svg)
 */
const CompressWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 96l0-32L96 64l0 32 0 64-64 0L0 160l0 64 32 0 96 0 32 0 0-32 0-96zM32 288L0 288l0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM416 96l0-32-64 0 0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM384 288l-32 0 0 32 0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0-96 0z" />
    </Icon>
);

export default CompressWide;
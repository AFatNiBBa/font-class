
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-left-right-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right-to-line?s=sharp-duotone-solid arrows-left-right-to-line}
 * @preview ![arrows-left-right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-left-right-to-line.svg)
 */
const ArrowsLeftRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 416l0 32 64 0 0-32L64 96l0-32L0 64zm576 0l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
        <path d="M269.3 160l-22.6 22.6L205.3 224l229.5 0-41.4-41.4L370.7 160 416 114.7l22.6 22.6 96 96L557.3 256l-22.6 22.6-96 96L416 397.3 370.7 352l22.6-22.6L434.7 288l-229.5 0 41.4 41.4L269.3 352 224 397.3l-22.6-22.6-96-96L82.7 256l22.6-22.6 96-96L224 114.7 269.3 160z" />
    </Icon>
);

export default ArrowsLeftRightToLine;
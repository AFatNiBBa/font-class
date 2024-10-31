
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-to-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-to-square?s=sharp-duotone-solid pen-to-square}
 * @preview ![pen-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-to-square.svg)
 */
const PenToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l32 0 160 0 32 0 0 64-32 0L64 128l0 320 320 0 0-128 0-32 64 0 0 32 0 160 0 32-32 0L32 512 0 512l0-32L0 96 0 64z" />
        <path d="M128 384l16-112L340.7 75.3l96 96L240 368 128 384zM459.3 148.7l-96-96L416 0l96 96-52.7 52.7z" />
    </Icon>
);

export default PenToSquare;
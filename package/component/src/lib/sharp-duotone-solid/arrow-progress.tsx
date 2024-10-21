
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-progress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-progress?s=sharp-duotone-solid arrow-progress}
 * @preview ![arrow-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-progress.svg)
 */
const ArrowProgress: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384L0 512l128 0 0-32 32 0 0 32 24 0 72-64-72-64-24 0 0 32-32 0 0-32L0 384zM384 0l0 128 128 0L512 0 384 0z" />
        <path d="M256 128l0-32L64 96l0 128 416 0 32 0 0 32 0 192 0 32-32 0-64 0 0 32-128 0 0-128 128 0 0 32 32 0 0-128L32 288 0 288l0-32L0 64 0 32l32 0 224 0 0-32 24 0 72 64-72 64-24 0z" />
    </Icon>
);

export default ArrowProgress;
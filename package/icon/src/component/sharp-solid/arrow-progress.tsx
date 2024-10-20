
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-progress` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-progress?s=sharp-solid arrow-progress}
 * @preview ![arrow-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-progress.svg)
 */
const ArrowProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 128l0-32L64 96l0 128 416 0 32 0 0 32 0 192 0 32-32 0-64 0 0 32-128 0 0-128 128 0 0 32 32 0 0-128L32 288 0 288l0-32L0 64 0 32l32 0 224 0 0-32 24 0 72 64-72 64-24 0zM128 384l0 32 32 0 0-32 24 0 72 64-72 64-24 0 0-32-32 0 0 32L0 512 0 384l128 0zM512 0l0 128-128 0L384 0 512 0z" />
    </Icon>
);

export default ArrowProgress;
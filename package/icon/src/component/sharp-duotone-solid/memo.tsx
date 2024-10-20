
import { Icon, generic } from "../../index";

/**
 * A component that renders the `memo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo?s=sharp-duotone-solid memo}
 * @preview ![memo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/memo.svg)
 */
const Memo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0L384 0 0 0zM64 128l16 0 224 0 16 0 0 32-16 0L80 160l-16 0 0-32zm0 96l16 0 224 0 16 0 0 32-16 0L80 256l-16 0 0-32zm0 96l16 0 128 0 16 0 0 32-16 0L80 352l-16 0 0-32z" />
        <path d="M64 128l16 0 224 0 16 0 0 32-16 0L80 160l-16 0 0-32zm0 96l16 0 224 0 16 0 0 32-16 0L80 256l-16 0 0-32zm0 96l16 0 128 0 16 0 0 32-16 0L80 352l-16 0 0-32z" />
    </Icon>
);

export default Memo;
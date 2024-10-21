
import { Icon } from "../../index";

/**
 * A component that renders the `memo` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo?s=sharp-light memo}
 * @preview ![memo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/memo.svg)
 */
const Memo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 448 320 0 0-448L32 32zM0 0L32 0 352 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM80 128l224 0 16 0 0 32-16 0L80 160l-16 0 0-32 16 0zm0 96l224 0 16 0 0 32-16 0L80 256l-16 0 0-32 16 0zm0 96l128 0 16 0 0 32-16 0L80 352l-16 0 0-32 16 0z" />
    </Icon>
);

export default Memo;
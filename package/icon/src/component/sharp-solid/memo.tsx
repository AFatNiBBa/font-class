
import { Icon } from "../../index";

/**
 * A component that renders the `memo` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo?s=sharp-solid memo}
 * @preview ![memo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/memo.svg)
 */
const Memo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 512l384 0L384 0zM80 128l224 0 16 0 0 32-16 0L80 160l-16 0 0-32 16 0zm0 96l224 0 16 0 0 32-16 0L80 256l-16 0 0-32 16 0zm0 96l128 0 16 0 0 32-16 0L80 352l-16 0 0-32 16 0z" />
    </Icon>
);

export default Memo;
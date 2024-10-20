
import { Icon } from "../../index";

/**
 * A component that renders the `memo` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo?s=sharp-thin memo}
 * @preview ![memo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/memo.svg)
 */
const Memo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l0 480 352 0 0-480L16 16zM0 0L16 0 368 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM72 128l240 0 8 0 0 16-8 0L72 144l-8 0 0-16 8 0zm0 96l240 0 8 0 0 16-8 0L72 240l-8 0 0-16 8 0zm0 96l144 0 8 0 0 16-8 0L72 336l-8 0 0-16 8 0z" />
    </Icon>
);

export default Memo;

import { Icon } from "../../index";

/**
 * A component that renders the `pallet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=sharp-thin pallet}
 * @preview ![pallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pallet.svg)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 352l-8 0 0 16 8 0 72 0 0 128L8 496l-8 0 0 16 8 0 72 0 8 0 8 0 216 0 8 0 8 0 216 0 8 0 8 0 72 0 8 0 0-16-8 0-72 0 0-128 72 0 8 0 0-16-8 0-72 0-8 0-8 0-216 0-8 0-8 0L96 352l-8 0-8 0L8 352zm88 16l216 0 0 128L96 496l0-128zm232 0l216 0 0 128-216 0 0-128z" />
    </Icon>
);

export default Pallet;
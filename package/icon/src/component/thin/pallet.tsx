
import { Icon } from "../../index";

/**
 * A component that renders the `pallet` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=thin pallet}
 * @preview ![pallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pallet.svg)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 352c-4.4 0-8 3.6-8 8s3.6 8 8 8l72 0 0 128L8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 232 0 232 0 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-72 0 0-128 72 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0-232 0L88 352 8 352zm88 16l216 0 0 128L96 496l0-128zm232 0l216 0 0 128-216 0 0-128z" />
    </Icon>
);

export default Pallet;
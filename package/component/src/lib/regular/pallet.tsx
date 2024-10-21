
import { Icon } from "../../index";

/**
 * A component that renders the `pallet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=regular pallet}
 * @preview ![pallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pallet.svg)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 320c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 96-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 232 0 232 0 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-96 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0-232 0L88 320l-64 0zm88 48l184 0 0 96-184 0 0-96zm232 0l184 0 0 96-184 0 0-96z" />
    </Icon>
);

export default Pallet;

import { Icon } from "../../index";

/**
 * A component that renders the `pallet` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=solid pallet}
 * @preview ![pallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pallet.svg)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 64-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 224 0 224 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-224 0L96 320l-64 0zm96 64l160 0 0 64-160 0 0-64zm224 0l160 0 0 64-160 0 0-64z" />
    </Icon>
);

export default Pallet;
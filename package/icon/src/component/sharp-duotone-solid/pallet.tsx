
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pallet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=sharp-duotone-solid pallet}
 * @preview ![pallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pallet.svg)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 320L0 320l0 64 32 0 32 0 0 64-32 0L0 448l0 64 32 0 32 0 32 0 32 0 160 0 32 0 32 0 160 0 32 0 32 0 32 0 32 0 0-64-32 0-32 0 0-64 32 0 32 0 0-64-32 0-32 0-32 0-32 0-160 0-32 0-32 0-160 0-32 0-32 0-32 0zm96 64l160 0 0 64-160 0 0-64zm224 0l160 0 0 64-160 0 0-64z" />
    </Icon>
);

export default Pallet;
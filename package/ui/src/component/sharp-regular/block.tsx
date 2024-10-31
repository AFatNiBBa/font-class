
import { Icon } from "../../index";

/**
 * A component that renders the `block` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block?s=sharp-regular block}
 * @preview ![block](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/block.svg)
 */
const Block: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32zm64 88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM112 392a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Block;
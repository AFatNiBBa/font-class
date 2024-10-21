
import { Icon } from "../../index";

/**
 * A component that renders the `block` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block?s=sharp-light block}
 * @preview ![block](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/block.svg)
 */
const Block: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zm80 88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM112 392a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Block;
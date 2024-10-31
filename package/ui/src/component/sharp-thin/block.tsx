
import { Icon } from "../../index";

/**
 * A component that renders the `block` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block?s=sharp-thin block}
 * @preview ![block](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/block.svg)
 */
const Block: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32zm80 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm272 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM96 400a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm272 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Block;
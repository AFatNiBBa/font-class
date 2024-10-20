
import { Icon } from "../../index";

/**
 * A component that renders the `block` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block?s=sharp-solid block}
 * @preview ![block](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/block.svg)
 */
const Block: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zm96 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM96 408a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Block;
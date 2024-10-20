
import { Icon, generic } from "../../index";

/**
 * A component that renders the `block` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block?s=duotone block}
 * @preview ![block](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/block.svg)
 */
const Block: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm48 8a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 304a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM352 104a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 304a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M72 128a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm304 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM96 408a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Block;
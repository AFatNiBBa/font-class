
import { Icon } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=light block-quote}
 * @preview ![block-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/block-quote.svg)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 80C7.2 80 0 87.2 0 96s7.2 16 16 16l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 80zM144 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-288 0zM128 416c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM0 432c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 432z" />
    </Icon>
);

export default BlockQuote;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-vertical-nft` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-vertical-nft?s=sharp-duotone-solid hexagon-vertical-nft}
 * @preview ![hexagon-vertical-nft](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hexagon-vertical-nft.svg)
 */
const HexagonVerticalNft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 128L224 0 448 128l0 256L224 512 0 384 0 128zm64 32l0 16 0 160 0 16 32 0 0-16 0-77.7 24.7 82.3 3.4 11.4 11.9 0 8 0 16 0 0-16 0-160 0-16-32 0 0 16 0 77.7-24.7-82.2L99.9 160 88 160l-8 0-16 0zm128 0l0 16 0 80 0 80 0 16 32 0 0-16 0-64 32 0 16 0 0-32-16 0-32 0 0-48 32 0 16 0 0-32-16 0-48 0-16 0zm96 0l0 32 16 0 16 0 0 144 0 16 32 0 0-16 0-144 16 0 16 0 0-32-16 0-32 0-32 0-16 0z" />
        <path d="M64 160l16 0 8 0 11.9 0 3.4 11.4L128 253.7l0-77.7 0-16 32 0 0 16 0 160 0 16-16 0-8 0-11.9 0-3.4-11.4L96 258.3 96 336l0 16-32 0 0-16 0-160 0-16zm128 0l16 0 48 0 16 0 0 32-16 0-32 0 0 48 32 0 16 0 0 32-16 0-32 0 0 64 0 16-32 0 0-16 0-80 0-80 0-16zm96 0l16 0 32 0 32 0 16 0 0 32-16 0-16 0 0 144 0 16-32 0 0-16 0-144-16 0-16 0 0-32z" />
    </Icon>
);

export default HexagonVerticalNft;
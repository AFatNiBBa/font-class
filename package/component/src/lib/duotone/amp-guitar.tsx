
import { Icon, generic } from "../../index";

/**
 * A component that renders the `amp-guitar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/amp-guitar?s=duotone amp-guitar}
 * @preview ![amp-guitar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/amp-guitar.svg)
 */
const AmpGuitar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M92.5 96l66.5 0c2.1-1.9 4.3-3.8 6.5-5.8C192.5 67.2 224.9 48 256 48s63.5 19.2 90.4 42.2c2.2 1.9 4.4 3.9 6.5 5.8l66.5 0c-1.7-2.1-3.7-4.4-6-6.9c-8.5-9.6-20.8-22.4-35.8-35.3C348.5 28.8 304.9 0 256 0s-92.5 28.8-121.6 53.8c-15 12.9-27.3 25.7-35.8 35.3c-2.3 2.6-4.3 4.9-6 6.9zM112 304a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M64 96C28.7 96 0 124.7 0 160L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 96zm32 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm152-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm56 80l0 192L64 448l0-192 384 0z" />
    </Icon>
);

export default AmpGuitar;
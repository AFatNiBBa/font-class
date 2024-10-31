
import { Icon } from "../../index";

/**
 * A component that renders the `peapod` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peapod?s=light peapod}
 * @preview ![peapod](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/peapod.svg)
 */
const Peapod: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 32C203.9 32 32 203.9 32 416l0 48c0 8.8 7.2 16 16 16l48 0c212.1 0 384-171.9 384-384l0-48c0-8.8-7.2-16-16-16l-48 0zm0-32l48 0c26.5 0 48 21.5 48 48l0 48c0 229.8-186.2 416-416 416l-48 0c-26.5 0-48-21.5-48-48l0-48C0 186.2 186.2 0 416 0zM368 112a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zM224 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM112 368a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128z" />
    </Icon>
);

export default Peapod;
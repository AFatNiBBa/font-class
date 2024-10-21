
import { Icon } from "../../index";

/**
 * A component that renders the `peapod` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peapod?s=sharp-light peapod}
 * @preview ![peapod](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/peapod.svg)
 */
const Peapod: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 32C203.9 32 32 203.9 32 416l0 64 64 0c212.1 0 384-171.9 384-384l0-64-64 0zm0-32l64 0 32 0 0 32 0 64c0 229.8-186.2 416-416 416l-64 0L0 512l0-32 0-64C0 186.2 186.2 0 416 0zM368 112a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zM224 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM112 368a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128z" />
    </Icon>
);

export default Peapod;
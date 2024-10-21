
import { Icon } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=sharp-light compact-disc}
 * @preview ![compact-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/compact-disc.svg)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm72 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-120 0l-32 0c0-97.2 78.8-176 176-176l0 32c-79.5 0-144 64.5-144 144z" />
    </Icon>
);

export default CompactDisc;
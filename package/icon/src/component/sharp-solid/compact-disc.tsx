
import { Icon } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=sharp-solid compact-disc}
 * @preview ![compact-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/compact-disc.svg)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm-64 0c0-88.4 71.6-160 160-160l0-32C150 64 64 150 64 256l32 0z" />
    </Icon>
);

export default CompactDisc;
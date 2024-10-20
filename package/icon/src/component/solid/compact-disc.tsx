
import { Icon } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=solid compact-disc}
 * @preview ![compact-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/compact-disc.svg)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM96 240c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
    </Icon>
);

export default CompactDisc;
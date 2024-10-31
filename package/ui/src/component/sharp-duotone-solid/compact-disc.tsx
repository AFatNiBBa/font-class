
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=sharp-duotone-solid compact-disc}
 * @preview ![compact-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/compact-disc.svg)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm64 0C64 150 150 64 256 64l0 32C167.6 96 96 167.6 96 256l-32 0zm288 0a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
        <path d="M256 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm96 32a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
    </Icon>
);

export default CompactDisc;
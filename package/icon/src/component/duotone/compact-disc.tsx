
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=duotone compact-disc}
 * @preview ![compact-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/compact-disc.svg)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm64-16c0-45.4 22.3-89.2 54.5-121.5S194.6 64 240 64c8.8 0 16 7.2 16 16s-7.2 16-16 16c-35 0-71.1 17.5-98.8 45.2S96 205 96 240c0 8.8-7.2 16-16 16s-16-7.2-16-16zm288 16a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
        <path d="M256 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm96 32a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
    </Icon>
);

export default CompactDisc;
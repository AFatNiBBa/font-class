
import { Icon } from "../../index";

/**
 * A component that renders the `spray-can` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spray-can?s=regular spray-can}
 * @preview ![spray-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/spray-can.svg)
 */
const SprayCan: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0C110.3 0 96 14.3 96 32l0 96 128 0 0-96c0-17.7-14.3-32-32-32L128 0zm96 208c26.5 0 48 21.5 48 48l0 184c0 13.3-10.7 24-24 24L72 464c-13.3 0-24-10.7-24-24l0-184c0-26.5 21.5-48 48-48l128 0zM96 160c-53 0-96 43-96 96L0 440c0 39.8 32.2 72 72 72l176 0c39.8 0 72-32.2 72-72l0-184c0-53-43-96-96-96L96 160zM224 336A64 64 0 1 0 96 336a64 64 0 1 0 128 0zM320 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM512 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM480 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default SprayCan;
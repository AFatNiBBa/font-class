
import { Icon } from "../../index";

/**
 * A component that renders the `spray-can` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spray-can?s=sharp-regular spray-can}
 * @preview ![spray-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/spray-can.svg)
 */
const SprayCan: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0L96 0l0 128 128 0L224 0zm0 208c26.5 0 48 21.5 48 48l0 208L48 464l0-208c0-26.5 21.5-48 48-48l128 0zM96 160c-53 0-96 43-96 96L0 464l0 48 48 0 224 0 48 0 0-48 0-208c0-53-43-96-96-96L96 160zM224 336A64 64 0 1 0 96 336a64 64 0 1 0 128 0zM320 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM512 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM480 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default SprayCan;
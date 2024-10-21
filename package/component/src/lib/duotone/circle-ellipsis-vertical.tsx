
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-ellipsis-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis-vertical?s=duotone circle-ellipsis-vertical}
 * @preview ![circle-ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-ellipsis-vertical.svg)
 */
const CircleEllipsisVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm288-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M256 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default CircleEllipsisVertical;
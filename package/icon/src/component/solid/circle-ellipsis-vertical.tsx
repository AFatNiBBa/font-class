
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis-vertical` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis-vertical?s=solid circle-ellipsis-vertical}
 * @preview ![circle-ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-ellipsis-vertical.svg)
 */
const CircleEllipsisVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-288a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CircleEllipsisVertical;
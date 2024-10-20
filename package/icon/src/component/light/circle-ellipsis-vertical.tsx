
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis-vertical` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis-vertical?s=light circle-ellipsis-vertical}
 * @preview ![circle-ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-ellipsis-vertical.svg)
 */
const CircleEllipsisVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-24-72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CircleEllipsisVertical;
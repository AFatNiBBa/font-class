
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis-vertical` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis-vertical?s=sharp-thin circle-ellipsis-vertical}
 * @preview ![circle-ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-ellipsis-vertical.svg)
 */
const CircleEllipsisVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm240 80l32 0 0 32-32 0 0-32zm0-192l32 0 0 32-32 0 0-32zm0 128l0-32 32 0 0 32-32 0z" />
    </Icon>
);

export default CircleEllipsisVertical;
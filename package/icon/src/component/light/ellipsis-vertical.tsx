
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=light ellipsis-vertical}
 * @preview ![ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ellipsis-vertical.svg)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M64 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-160a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM96 96A32 32 0 1 0 32 96a32 32 0 1 0 64 0z" />
    </Icon>
);

export default EllipsisVertical;
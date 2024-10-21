
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=thin ellipsis-vertical}
 * @preview ![ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ellipsis-vertical.svg)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M64 400a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm0-128a16 16 0 1 1 0-32 16 16 0 1 1 0 32zM48 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default EllipsisVertical;
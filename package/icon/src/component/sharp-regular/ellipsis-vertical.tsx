
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=sharp-regular ellipsis-vertical}
 * @preview ![ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ellipsis-vertical.svg)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M24 56l80 0 0 80-80 0 0-80zm0 160l80 0 0 80-80 0 0-80zm80 160l0 80-80 0 0-80 80 0z" />
    </Icon>
);

export default EllipsisVertical;

import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=sharp-thin ellipsis-vertical}
 * @preview ![ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ellipsis-vertical.svg)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M48 112l32 0 0 32-32 0 0-32zm0 128l32 0 0 32-32 0 0-32zM80 368l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default EllipsisVertical;
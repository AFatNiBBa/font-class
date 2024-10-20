
import { Icon } from "../../index";

/**
 * A component that renders the `plane-tail` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-tail?s=sharp-regular plane-tail}
 * @preview ![plane-tail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/plane-tail.svg)
 */
const PlaneTail: typeof Icon = x => (
    <Icon {...x}>
        <path d="M-8 0L61.5 308.8 17.6 320.9 0 325.7 0 344l0 56 0 16.6 15.5 5.9 232 88 4.1 1.6 4.4 0 232 0 24 0 0-48-24 0-227.6 0L48 383.4l0-21.2L259.2 304 488 304l24 0 0-48-24 0-104 0L136 0-8 0zM216 352l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default PlaneTail;
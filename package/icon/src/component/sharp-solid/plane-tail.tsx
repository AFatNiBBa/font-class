
import { Icon } from "../../index";

/**
 * A component that renders the `plane-tail` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-tail?s=sharp-solid plane-tail}
 * @preview ![plane-tail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/plane-tail.svg)
 */
const PlaneTail: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256l0 256-256 0L0 416l0-96 64-16L0 0 144 0 384 256l128 0zM224 352l-24 0 0 48 24 0 128 0 24 0 0-48-24 0-128 0z" />
    </Icon>
);

export default PlaneTail;
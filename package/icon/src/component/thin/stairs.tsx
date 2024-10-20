
import { Icon } from "../../index";

/**
 * A component that renders the `stairs` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=thin stairs}
 * @preview ![stairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/stairs.svg)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M424 40c0-4.4 3.6-8 8-8l136 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L440 48l0 136c0 4.4-3.6 8-8 8l-136 0 0 136c0 4.4-3.6 8-8 8l-136 0 0 136c0 4.4-3.6 8-8 8L8 480c-4.4 0-8-3.6-8-8s3.6-8 8-8l128 0 0-136c0-4.4 3.6-8 8-8l136 0 0-136c0-4.4 3.6-8 8-8l136 0 0-136z" />
    </Icon>
);

export default Stairs;
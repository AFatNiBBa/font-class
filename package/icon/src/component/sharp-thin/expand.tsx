
import { Icon } from "../../index";

/**
 * A component that renders the `expand` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand?s=sharp-thin expand}
 * @preview ![expand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/expand.svg)
 */
const Expand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M152 32c4.4 0 8 3.6 8 8s-3.6 8-8 8L16 48l0 136c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 40c0-4.4 3.6-8 8-8l144 0zM0 328c0-4.4 3.6-8 8-8s8 3.6 8 8l0 136 136 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 480c-4.4 0-8-3.6-8-8L0 328zM296 32l144 0c4.4 0 8 3.6 8 8l0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-136L296 48c-4.4 0-8-3.6-8-8s3.6-8 8-8zM448 328l0 144c0 4.4-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l136 0 0-136c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default Expand;
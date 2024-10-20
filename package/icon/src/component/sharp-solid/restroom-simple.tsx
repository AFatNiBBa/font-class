
import { Icon } from "../../index";

/**
 * A component that renders the `restroom-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/restroom-simple?s=sharp-solid restroom-simple}
 * @preview ![restroom-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/restroom-simple.svg)
 */
const RestroomSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 64A64 64 0 1 0 64 64a64 64 0 1 0 128 0zm32 96L32 160 24 352l40 0 0 160 128 0 0-160 40 0-8-192zM344 0L296 0l0 24 0 464 0 24 48 0 0-24 0-464 0-24zM512 128A64 64 0 1 0 512 0a64 64 0 1 0 0 128zM640 384L576 160l-128 0L384 384l64 0 0 128 128 0 0-128 64 0z" />
    </Icon>
);

export default RestroomSimple;
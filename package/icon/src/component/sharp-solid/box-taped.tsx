
import { Icon } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=sharp-solid box-taped}
 * @preview ![box-taped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/box-taped.svg)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32L0 160l160 0L192 32 64 32zM288 160l160 0L384 32 256 32l32 128zM160 192L0 192 0 480l448 0 0-288-160 0 0 96-128 0 0-96z" />
    </Icon>
);

export default BoxTaped;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-from-line?s=sharp-duotone-solid arrows-from-line}
 * @preview ![arrows-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-from-line.svg)
 */
const ArrowsFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l32 0 384 0 32 0 0 64-32 0L32 288 0 288l0-64z" />
        <path d="M128 96L224 0l96 96 0 32-64 0 0 32 0 32-64 0 0-32 0-32-64 0 0-32zM256 320l0 32 0 16 0 16 64 0 0 32-96 96-96-96 0-32 64 0 0-16 0-16 0-32 64 0z" />
    </Icon>
);

export default ArrowsFromLine;
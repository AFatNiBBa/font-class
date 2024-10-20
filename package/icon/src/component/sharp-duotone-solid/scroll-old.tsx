
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scroll-old` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scroll-old?s=sharp-duotone-solid scroll-old}
 * @preview ![scroll-old](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scroll-old.svg)
 */
const ScrollOld: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 32l352 0c35.3 0 64 28.7 64 64l0 16 0 16-32 32 32 32 0 16 0 16-32 32 32 32 0 16 0 48-48 0-16 0-32 32-32-32-16 0-48 0 0 48c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-128 0-16 32-32-32-32 0-16 0-16 0-64c0-35.3-28.7-64-64-64z" />
        <path d="M128 160l0-64c0-35.3-28.7-64-64-64S0 60.7 0 96l0 64 128 0zM288 352l0 48c0 44.2-35.8 80-80 80l272 0c53 0 96-43 96-96l0-32-144 0-16 0-32 32-32-32-16 0-48 0z" />
    </Icon>
);

export default ScrollOld;
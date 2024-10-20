
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scroll-old` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scroll-old?s=duotone scroll-old}
 * @preview ![scroll-old](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scroll-old.svg)
 */
const ScrollOld: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 32l352 0c35.3 0 64 28.7 64 64l0 24 0 1.4c0 4.2-1.7 8.3-4.7 11.3l-21.7 21.7c-3.1 3.1-3.1 8.2 0 11.3l21.7 21.7c3 3 4.7 7.1 4.7 11.3l0 1.4 0 16 0 1.4c0 4.2-1.7 8.3-4.7 11.3l-21.7 21.7c-3.1 3.1-3.1 8.2 0 11.3l21.7 21.7c3 3 4.7 7.1 4.7 11.3l0 1.4 0 56-56 0-1.4 0c-4.2 0-8.3 1.7-11.3 4.7l-21.7 21.7c-3.1 3.1-8.2 3.1-11.3 0l-21.7-21.7c-3-3-7.1-4.7-11.3-4.7l-1.4 0-24 0c-17.7 0-32 14.3-32 32l0 16c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-136 0-1.4c0-4.2 1.7-8.3 4.7-11.3l21.7-21.7c3.1-3.1 3.1-8.2 0-11.3l-21.7-21.7c-3-3-4.7-7.1-4.7-11.3l0-1.4 0-24 0-64c0-35.3-28.7-64-64-64z" />
        <path d="M32 160l96 0 0-64c0-35.3-28.7-64-64-64S0 60.7 0 96l0 32c0 17.7 14.3 32 32 32zM288 384l0 16c0 44.2-35.8 80-80 80l272 0c53 0 96-43 96-96c0-17.7-14.3-32-32-32l-120 0-1.4 0c-4.2 0-8.3 1.7-11.3 4.7l-21.7 21.7c-3.1 3.1-8.2 3.1-11.3 0l-21.7-21.7c-3-3-7.1-4.7-11.3-4.7l-1.4 0-24 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default ScrollOld;
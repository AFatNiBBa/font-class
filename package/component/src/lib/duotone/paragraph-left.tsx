
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paragraph-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph-left?s=duotone paragraph-left}
 * @preview ![paragraph-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paragraph-left.svg)
 */
const ParagraphLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 112c0 61.9 50.1 112 112 112l16 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 32 0 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224c17.7 0 32-14.3 32-32s-14.3-32-32-32L160 0 144 0C82.1 0 32 50.1 32 112z" />
        <path d="M128 384l0-46.4c0-9.7-7.9-17.6-17.6-17.6c-4.2 0-8.2 1.5-11.3 4.2l-93 78.7C2.2 406.1 0 410.9 0 416s2.2 9.9 6.1 13.2l93 78.7c3.2 2.7 7.2 4.2 11.3 4.2c9.7 0 17.6-7.9 17.6-17.6l0-46.4 224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0z" />
    </Icon>
);

export default ParagraphLeft;
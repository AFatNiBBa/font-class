
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paragraph-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph-left?s=sharp-duotone-solid paragraph-left}
 * @preview ![paragraph-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/paragraph-left.svg)
 */
const ParagraphLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 112c0 61.9 50.1 112 112 112l16 0 0 64 0 32 64 0 0-32 0-224 32 0 0 224 0 32 64 0 0-32 0-224 32 0 0-64L320 0 160 0 144 0C82.1 0 32 50.1 32 112z" />
        <path d="M128 384l0-64-32 0L0 416l96 96 32 0 0-64 224 0 32 0 0-64-32 0-224 0z" />
    </Icon>
);

export default ParagraphLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `square-a` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a?s=sharp-light square-a}
 * @preview ![square-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-a.svg)
 */
const SquareA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm213.8 96l20.4 0 4.3 9.2L354 384l-35.3 0-30-64-129.5 0-30 64L94 384 209.5 137.2l4.3-9.2zM224 181.7L174.2 288l99.5 0L224 181.7z" />
    </Icon>
);

export default SquareA;
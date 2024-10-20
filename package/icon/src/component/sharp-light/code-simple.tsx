
import { Icon } from "../../index";

/**
 * A component that renders the `code-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-simple?s=sharp-light code-simple}
 * @preview ![code-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/code-simple.svg)
 */
const CodeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M203.3 99.3L214.6 88 192 65.4 180.7 76.7l-168 168L1.4 256l11.3 11.3 168 168L192 446.6 214.6 424l-11.3-11.3L46.6 256 203.3 99.3zm169.4 0L529.4 256 372.7 412.7 361.4 424 384 446.6l11.3-11.3 168-168L574.6 256l-11.3-11.3-168-168L384 65.4 361.4 88l11.3 11.3z" />
    </Icon>
);

export default CodeSimple;

import { Icon } from "../../index";

/**
 * A component that renders the `code-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-simple?s=sharp-thin code-simple}
 * @preview ![code-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/code-simple.svg)
 */
const CodeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M386.3 85.7L380.7 80 392 68.7l5.7 5.7 176 176 5.7 5.7-5.7 5.7-176 176-5.7 5.7L380.7 432l5.7-5.7L556.7 256 386.3 85.7zm-196.6-.1L27.1 256 189.8 426.5l5.5 5.8-11.6 11-5.5-5.8-168-176L4.9 256l5.3-5.5 168-176 5.5-5.8 11.6 11-5.5 5.8z" />
    </Icon>
);

export default CodeSimple;
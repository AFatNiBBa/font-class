
import { Icon } from "../../index";

/**
 * A component that renders the `code-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-simple?s=sharp-solid code-simple}
 * @preview ![code-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/code-simple.svg)
 */
const CodeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M199.9 133.3L90.8 256 199.9 378.7l21.3 23.9-47.8 42.5-21.3-23.9-128-144L5.2 256l18.9-21.3 128-144 21.3-23.9 47.8 42.5-21.3 23.9zm176.2 0l-21.3-23.9 47.8-42.5 21.3 23.9 128 144L570.8 256l-18.9 21.3-128 144-21.3 23.9-47.8-42.5 21.3-23.9L485.2 256 376.1 133.3z" />
    </Icon>
);

export default CodeSimple;
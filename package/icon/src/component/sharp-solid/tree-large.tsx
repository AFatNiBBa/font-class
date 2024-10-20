
import { Icon } from "../../index";

/**
 * A component that renders the `tree-large` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-large?s=sharp-solid tree-large}
 * @preview ![tree-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tree-large.svg)
 */
const TreeLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M56 176L224 0 392 176v32H344l80 112v32H368l80 128v32H0V480L80 352H24V320l80-112H56V176z" />
    </Icon>
);

export default TreeLarge;
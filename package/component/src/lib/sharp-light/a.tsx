
import { Icon } from "../../index";

/**
 * A component that renders the `a` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/a?s=sharp-light a}
 * @preview ![a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/a.svg)
 */
const A: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M181.2 32l21.7 0 4 10.1L382 480l-34.5 0-38.4-96L74.8 384 36.4 480 2 480 177.1 42.1l4-10.1zM192 91.1L87.6 352l208.7 0L192 91.1z" />
    </Icon>
);

export default A;
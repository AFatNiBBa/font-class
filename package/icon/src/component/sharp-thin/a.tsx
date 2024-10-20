
import { Icon } from "../../index";

/**
 * A component that renders the `a` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/a?s=sharp-thin a}
 * @preview ![a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/a.svg)
 */
const A: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M186.6 32l-2 5L3.2 480l17.3 0L66.3 368l251.3 0 45.9 112 17.3 0L199.4 37l-2-5-10.7 0zM311.1 352L72.9 352 192 61.1 311.1 352z" />
    </Icon>
);

export default A;
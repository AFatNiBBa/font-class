
import { Icon } from "../../index";

/**
 * A component that renders the `p` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=solid p}
 * @preview ![p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/p.svg)
 */
const P: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l96 0c88.4 0 160 71.6 160 160s-71.6 160-160 160l-96 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 320 0 96zM64 288l96 0c53 0 96-43 96-96s-43-96-96-96L64 96l0 192z" />
    </Icon>
);

export default P;
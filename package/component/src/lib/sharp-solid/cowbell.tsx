
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=sharp-solid cowbell}
 * @preview ![cowbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cowbell.svg)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l24 0L296 0l24 0 0 24 0 72 64 0 64 320L0 416 64 96l64 0 0-72 0-24zM272 48l-96 0 0 48 96 0 0-48zm16 400c0 35.3-28.7 64-64 64s-64-28.7-64-64l128 0z" />
    </Icon>
);

export default Cowbell;
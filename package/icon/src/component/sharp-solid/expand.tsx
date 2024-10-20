
import { Icon } from "../../index";

/**
 * A component that renders the `expand` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand?s=sharp-solid expand}
 * @preview ![expand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/expand.svg)
 */
const Expand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32L0 32 0 64l0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 32zM64 352l0-32L0 320l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM320 32l-32 0 0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM448 352l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z" />
    </Icon>
);

export default Expand;
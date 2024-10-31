
import { Icon } from "../../index";

/**
 * A component that renders the `border-outer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-outer?s=sharp-solid border-outer}
 * @preview ![border-outer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/border-outer.svg)
 */
const BorderOuter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 96l0 320 320 0 0-320L64 96zM0 32l64 0 320 0 64 0 0 64 0 320 0 64-64 0L64 480 0 480l0-64L0 96 0 32zm256 96l0 64-64 0 0-64 64 0zM96 224l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm-32 96l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default BorderOuter;
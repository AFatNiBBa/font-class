
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gingerbread-man` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gingerbread-man?s=sharp-duotone-solid gingerbread-man}
 * @preview ![gingerbread-man](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gingerbread-man.svg)
 */
const GingerbreadMan: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 176l0 128 64 0 48 0 0 24.8-80 96L48 512l94 0 82-98.4L306 512l94 0 0-87.2-80-96 0-24.8 48 0 64 0 0-128-64 0-90.9 0C303 158.8 320 129.4 320 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L80 176l-64 0zM208 80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm32 144a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM272 80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M208 224a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default GingerbreadMan;
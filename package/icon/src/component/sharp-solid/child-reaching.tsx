
import { Icon } from "../../index";

/**
 * A component that renders the `child-reaching` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-reaching?s=sharp-solid child-reaching}
 * @preview ![child-reaching](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/child-reaching.svg)
 */
const ChildReaching: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0a64 64 0 1 1 0 128A64 64 0 1 1 192 0zM176 384l0 96 0 32-64 0 0-32 0-241.2-8.6-10.3-80-96L2.9 107.9l49.2-41L72.6 91.5 143 176l1 0 96 0 2.3 0 68.9-84.3L331.5 67 381 107.5l-20.3 24.8-78.5 96L272.7 240l-.7 0 0 240 0 32-64 0 0-32 0-96-32 0z" />
    </Icon>
);

export default ChildReaching;
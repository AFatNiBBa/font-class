
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=sharp-light ellipsis-stroke}
 * @preview ![ellipsis-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ellipsis-stroke.svg)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 224l64 0 0 64-64 0 0-64zM32 288l0 32 32 0 64 0 32 0 0-32 0-64 0-32-32 0-64 0-32 0 0 32 0 64zm192-64l64 0 0 64-64 0 0-64zm-32 64l0 32 32 0 64 0 32 0 0-32 0-64 0-32-32 0-64 0-32 0 0 32 0 64zm192 0l0-64 64 0 0 64-64 0zm-32 32l32 0 64 0 32 0 0-32 0-64 0-32-32 0-64 0-32 0 0 32 0 64 0 32z" />
    </Icon>
);

export default EllipsisStroke;
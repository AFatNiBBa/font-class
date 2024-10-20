
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=sharp-thin ellipsis-stroke}
 * @preview ![ellipsis-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ellipsis-stroke.svg)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 288l64 0 0-64-64 0 0 64zM80 304l0-16 0-64 0-16 16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0zm144-80l0 64 64 0 0-64-64 0zm-16 64l0-64 0-16 16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16zm144-64l0 64 64 0 0-64-64 0zm-16 64l0-64 0-16 16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16z" />
    </Icon>
);

export default EllipsisStroke;
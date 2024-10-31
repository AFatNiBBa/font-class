
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=sharp-solid ellipsis-stroke}
 * @preview ![ellipsis-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ellipsis-stroke.svg)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 240l32 0 0 32-32 0 0-32zM32 272l0 48 48 0 32 0 48 0 0-48 0-32 0-48-48 0-32 0-48 0 0 48 0 32zm208-32l32 0 0 32-32 0 0-32zm-48 32l0 48 48 0 32 0 48 0 0-48 0-32 0-48-48 0-32 0-48 0 0 48 0 32zm208 0l0-32 32 0 0 32-32 0zm-48 48l48 0 32 0 48 0 0-48 0-32 0-48-48 0-32 0-48 0 0 48 0 32 0 48z" />
    </Icon>
);

export default EllipsisStroke;
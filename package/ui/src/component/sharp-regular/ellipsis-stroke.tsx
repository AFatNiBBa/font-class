
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=sharp-regular ellipsis-stroke}
 * @preview ![ellipsis-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ellipsis-stroke.svg)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M72 232l48 0 0 48-48 0 0-48zM32 280l0 40 40 0 48 0 40 0 0-40 0-48 0-40-40 0-48 0-40 0 0 40 0 48zm200-48l48 0 0 48-48 0 0-48zm-40 48l0 40 40 0 48 0 40 0 0-40 0-48 0-40-40 0-48 0-40 0 0 40 0 48zm200 0l0-48 48 0 0 48-48 0zm-40 40l40 0 48 0 40 0 0-40 0-48 0-40-40 0-48 0-40 0 0 40 0 48 0 40z" />
    </Icon>
);

export default EllipsisStroke;
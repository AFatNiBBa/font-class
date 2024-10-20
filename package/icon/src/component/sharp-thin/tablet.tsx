
import { Icon } from "../../index";

/**
 * A component that renders the `tablet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=sharp-thin tablet}
 * @preview ![tablet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tablet.svg)
 */
const Tablet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 16l0 480 416 0 0-480L16 16zM0 0L16 0 432 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM176 432l96 0 8 0 0 16-8 0-96 0-8 0 0-16 8 0z" />
    </Icon>
);

export default Tablet;
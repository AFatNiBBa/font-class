
import { Icon } from "../../index";

/**
 * A component that renders the `chair` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=sharp-regular chair}
 * @preview ![chair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chair.svg)
 */
const Chair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M296 48l0 176-48 0 0-176-48 0 0 176-48 0 0-176-40 0 0 176-48 0L64 48 64 0l48 0L336 0l48 0 0 48 0 176-48 0 0-176-40 0zM0 368l6.9-16L48 256l352 0 41.1 96 6.9 16 0 32-32 0 0 88 0 24-48 0 0-24 0-88L80 400l0 88 0 24-48 0 0-24 0-88L0 400l0-32zm79.7-64L59.1 352l329.8 0-20.6-48L79.7 304z" />
    </Icon>
);

export default Chair;
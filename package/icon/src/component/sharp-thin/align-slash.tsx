
import { Icon } from "../../index";

/**
 * A component that renders the `align-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-slash?s=sharp-thin align-slash}
 * @preview ![align-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/align-slash.svg)
 */
const AlignSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM274.7 312L104 312l-8 0 0 16 8 0 191 0-20.3-16zm252.7 16l8.6 0 8 0 0-16-8 0-28.9 0 20.3 16zM536 200l8 0 0-16-8 0-191 0 20.3 16L536 200zm-403.1 0l-20.3-16-8.6 0-8 0 0 16 8 0 28.9 0zM536 56L182.9 56l20.3 16L536 72l8 0 0-16-8 0zM457.1 456l-20.3-16L104 440l-8 0 0 16 8 0 353.1 0z" />
    </Icon>
);

export default AlignSlash;
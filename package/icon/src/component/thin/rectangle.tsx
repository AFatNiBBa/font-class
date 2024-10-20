
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=thin rectangle}
 * @preview ![rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rectangle.svg)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 80c26.5 0 48 21.5 48 48l0 256c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l384 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64z" />
    </Icon>
);

export default Rectangle;
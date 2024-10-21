
import { Icon } from "../../index";

/**
 * A component that renders the `brush` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=regular brush}
 * @preview ![brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/brush.svg)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 288L48 64c0-8.8 7.2-16 16-16l32 0 0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96 64 0 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 96 0c8.8 0 16 7.2 16 16l0 224L48 288zM0 320c0 35.3 28.7 64 64 64l64 0 0 64c0 35.3 28.7 64 64 64s64-28.7 64-64l0-64 64 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 320zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Brush;
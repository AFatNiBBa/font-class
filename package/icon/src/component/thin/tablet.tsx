
import { Icon } from "../../index";

/**
 * A component that renders the `tablet` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=thin tablet}
 * @preview ![tablet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tablet.svg)
 */
const Tablet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM176 432l96 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default Tablet;
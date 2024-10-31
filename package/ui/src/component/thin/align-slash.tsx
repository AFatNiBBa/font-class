
import { Icon } from "../../index";

/**
 * A component that renders the `align-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-slash?s=thin align-slash}
 * @preview ![align-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/align-slash.svg)
 */
const AlignSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM274.7 312L104 312c-4.4 0-8 3.6-8 8s3.6 8 8 8l191 0-20.3-16zm252.7 16l8.6 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-28.9 0 20.3 16zM536 200c4.4 0 8-3.6 8-8s-3.6-8-8-8l-191 0 20.3 16L536 200zm-403.1 0l-20.3-16-8.6 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l28.9 0zM536 56L182.9 56l20.3 16L536 72c4.4 0 8-3.6 8-8s-3.6-8-8-8zM457.1 456l-20.3-16L104 440c-4.4 0-8 3.6-8 8s3.6 8 8 8l353.1 0z" />
    </Icon>
);

export default AlignSlash;
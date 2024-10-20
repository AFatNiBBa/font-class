
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-exclamation` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-exclamation?s=thin diamond-exclamation}
 * @preview ![diamond-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/diamond-exclamation.svg)
 */
const DiamondExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M273 23c-9.4-9.4-24.6-9.4-33.9 0L23 239c-9.4 9.4-9.4 24.6 0 33.9L239 489c9.4 9.4 24.6 9.4 33.9 0L489 273c9.4-9.4 9.4-24.6 0-33.9L273 23zM227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216zM256 128c4.4 0 8 3.6 8 8l0 160c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-160c0-4.4 3.6-8 8-8zM240 352a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default DiamondExclamation;
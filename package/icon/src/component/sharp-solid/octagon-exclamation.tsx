
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-exclamation?s=sharp-solid octagon-exclamation}
 * @preview ![octagon-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/octagon-exclamation.svg)
 */
const OctagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 160L0 352 160 512l192 0L512 352l0-192L352 0 160 0 0 160zm280-32l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM232 320l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default OctagonExclamation;
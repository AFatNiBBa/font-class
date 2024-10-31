
import { Icon } from "../../index";

/**
 * A component that renders the `border-outer` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-outer?s=sharp-light border-outer}
 * @preview ![border-outer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/border-outer.svg)
 */
const BorderOuter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM248 136l0 48-48 0 0-48 48 0zM104 232l48 0 0 48-48 0 0-48zm144 0l0 48-48 0 0-48 48 0zm48 0l48 0 0 48-48 0 0-48zm-48 96l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default BorderOuter;
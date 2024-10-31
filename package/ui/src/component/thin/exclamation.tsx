
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=thin exclamation}
 * @preview ![exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/exclamation.svg)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M72 40c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 328c0 4.4 3.6 8 8 8s8-3.6 8-8L72 40zM64 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Exclamation;
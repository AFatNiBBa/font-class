
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=light exclamation}
 * @preview ![exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/exclamation.svg)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M80 48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 304c0 8.8 7.2 16 16 16s16-7.2 16-16L80 48zM64 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Exclamation;
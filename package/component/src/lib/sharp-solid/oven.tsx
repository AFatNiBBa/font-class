
import { Icon } from "../../index";

/**
 * A component that renders the `oven` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oven?s=sharp-solid oven}
 * @preview ![oven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/oven.svg)
 */
const Oven: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L0 160l448 0L448 0 0 0zM56 80a24 24 0 1 1 48 0A24 24 0 1 1 56 80zM176 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm16 200l0 192L64 448l0-192 320 0zM64 192L0 192l0 64L0 448l0 64 64 0 320 0 64 0 0-64 0-192 0-64-64 0L64 192zm272 96l-224 0-16 0 0 32 16 0 224 0 16 0 0-32-16 0z" />
    </Icon>
);

export default Oven;
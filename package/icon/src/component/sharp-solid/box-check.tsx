
import { Icon } from "../../index";

/**
 * A component that renders the `box-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=sharp-solid box-check}
 * @preview ![box-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/box-check.svg)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 32l0 128L0 160 64 32l144 0zm32 0l144 0 64 128-208 0 0-128zM0 192l448 0 0 288L0 480 0 192zm337 89l17-17L320 230.1l-17 17-111 111-47-47-17-17L94.1 328l17 17 64 64 17 17 17-17L337 281z" />
    </Icon>
);

export default BoxCheck;
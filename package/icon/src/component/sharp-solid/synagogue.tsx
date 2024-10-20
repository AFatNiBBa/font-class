
import { Icon } from "../../index";

/**
 * A component that renders the `synagogue` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/synagogue?s=sharp-solid synagogue}
 * @preview ![synagogue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/synagogue.svg)
 */
const Synagogue: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0L160 128l0 32 0 112 0 240 128 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96 128 0 0-240 0-112 0-32L320 0zM512 240l0 272 128 0 0-240-80-80-48 48zM80 192L0 272 0 512l128 0 0-272L80 192zm240-73.9l21.3 36.9 42.6 0L362.7 192 384 228.9l-42.6 0L320 265.9l-21.3-36.9-42.7 0L277.4 192 256 155.1l42.7 0L320 118.1z" />
    </Icon>
);

export default Synagogue;
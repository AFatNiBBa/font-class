
import { Icon } from "../../index";

/**
 * A component that renders the `van-shuttle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=sharp-light van-shuttle}
 * @preview ![van-shuttle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/van-shuttle.svg)
 */
const VanShuttle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 32L0 32 0 48 0 368l0 16 16 0 48 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l48 0 16 0 0-16 0-160 0-6.1-4.1-4.6-144-160L487.1 32 480 32 368 32 176 32 16 32zM480 288c-41.8 0-77.4 26.7-90.5 64l-138.9 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64L32 352l0-128 144 0 192 0 240 0 0 128-37.5 0c-13.2-37.3-48.7-64-90.5-64zM32 192L32 64l128 0 0 128L32 192zm160 0l0-128 160 0 0 128-160 0zm192 0l0-128 88.9 0L588.1 192 384 192zm32 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM160 320a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default VanShuttle;
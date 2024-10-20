
import { Icon } from "../../index";

/**
 * A component that renders the `lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=sharp-light lock}
 * @preview ![lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lock.svg)
 */
const Lock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128l0 64 192 0 0-64c0-53-43-96-96-96s-96 43-96 96zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 64 0 32 0 0 32 0 256 0 32-32 0L32 512 0 512l0-32L0 224l0-32 32 0 64 0zM32 480l384 0 0-256L32 224l0 256z" />
    </Icon>
);

export default Lock;
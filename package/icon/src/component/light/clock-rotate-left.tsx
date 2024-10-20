
import { Icon } from "../../index";

/**
 * A component that renders the `clock-rotate-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=light clock-rotate-left}
 * @preview ![clock-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-rotate-left.svg)
 */
const ClockRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 132l0-84c0-8.8-7.2-16-16-16S0 39.2 0 48L0 176c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-90.4 0C89.5 84.3 166.7 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-73.3 0-138.3-35.2-179.2-89.6c-5.3-7.1-15.3-8.5-22.4-3.2s-8.5 15.3-3.2 22.4C97.9 471.8 172.2 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C159.6 0 75.7 53.3 32 132zm224-4c-8.8 0-16 7.2-16 16l0 112c0 4.2 1.7 8.3 4.7 11.3l80 80c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L272 249.4 272 144c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default ClockRotateLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `laptop-mobile` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=sharp-thin laptop-mobile}
 * @preview ![laptop-mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/laptop-mobile.svg)
 */
const LaptopMobile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 16l416 0 0 80 16 0 0-80 0-16L496 0 80 0 64 0l0 16 0 272-48 0L0 288l0 16 0 32 48 48 304 0 0-16L54.6 368 16 329.4 16 304l48 0 16 0 272 0 0-16L80 288 80 16zM624 144l0 352-224 0 0-352 224 0zM384 512l16 0 224 0 16 0 0-16 0-352 0-16-16 0-224 0-16 0 0 16 0 352 0 16z" />
    </Icon>
);

export default LaptopMobile;
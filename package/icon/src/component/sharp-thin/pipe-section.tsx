
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=sharp-thin pipe-section}
 * @preview ![pipe-section](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pipe-section.svg)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 112l0 288-32 0 0-288 32 0zM16 96L0 96l0 16L0 400l0 16 16 0 32 0 16 0 0-16 0-16 512 0 0 16 0 16 16 0 32 0 16 0 0-16 0-288 0-16-16 0-32 0-16 0 0 16 0 16L64 128l0-16 0-16L48 96 16 96zm560 48l0 224L64 368l0-224 512 0zm16-32l32 0 0 288-32 0 0-288z" />
    </Icon>
);

export default PipeSection;
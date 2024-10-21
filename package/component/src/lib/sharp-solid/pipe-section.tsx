
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=sharp-solid pipe-section}
 * @preview ![pipe-section](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pipe-section.svg)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 96L0 96l0 32L0 384l0 32 64 0 0-32 0-256 0-32zm576 0l-64 0 0 32 0 256 0 32 64 0 0-32 0-256 0-32zm-96 32L96 128l0 256 448 0 0-256z" />
    </Icon>
);

export default PipeSection;
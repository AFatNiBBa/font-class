
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=sharp-light pipe-valve}
 * @preview ![pipe-valve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pipe-valve.svg)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32l0-16-32 0 0 16 0 48-96 0-16 0 0 32 16 0 96 0 0 80L32 192l0-16 0-16L0 160l0 16 0 32L0 432l0 32 0 16 32 0 0-16 0-16 448 0 0 16 0 16 32 0 0-16 0-32 0-224 0-32 0-16-32 0 0 16 0 16-208 0 0-80 96 0 16 0 0-32-16 0-96 0 0-48zM240 224l16 0 16 0 208 0 0 192L32 416l0-192 208 0z" />
    </Icon>
);

export default PipeValve;
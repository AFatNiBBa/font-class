
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=sharp-thin pipe-valve}
 * @preview ![pipe-valve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pipe-valve.svg)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 40c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 30.8L112 50.4 96 48l0 16.2 0 63.6L96 144l16-2.4 136-20.4 0 70.8L64 192l0-16 0-16-16 0-32 0L0 160l0 16L0 464l0 16 16 0 32 0 16 0 0-16 0-16 384 0 0 16 0 16 16 0 32 0 16 0 0-16 0-288 0-16-16 0-32 0-16 0 0 16 0 16-184 0 0-70.8 136 20.4 16 2.4 0-16.2 0-63.6L416 48l-16 2.4L264 70.8 264 40zM448 208l0 224L64 432l0-224 192 0 192 0zM248 87l0 18L112 125.4l0-58.8L248 87zm16 18l0-18L400 66.6l0 58.8L264 105zM48 176l0 288-32 0 0-288 32 0zm416 0l32 0 0 288-32 0 0-288z" />
    </Icon>
);

export default PipeValve;

import { Icon } from "../../index";

/**
 * A component that renders the `input-pipe` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=sharp-light input-pipe}
 * @preview ![input-pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/input-pipe.svg)
 */
const InputPipe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 96l0 320 576 0 0-320L32 96zM0 64l32 0 576 0 32 0 0 32 0 320 0 32-32 0L32 448 0 448l0-32L0 96 0 64zM128 176l0 160 0 16-32 0 0-16 0-160 0-16 32 0 0 16z" />
    </Icon>
);

export default InputPipe;
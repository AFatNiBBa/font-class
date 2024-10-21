
import { Icon } from "../../index";

/**
 * A component that renders the `input-pipe` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=light input-pipe}
 * @preview ![input-pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/input-pipe.svg)
 */
const InputPipe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32L64 96zM0 128C0 92.7 28.7 64 64 64l512 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm128 48l0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default InputPipe;
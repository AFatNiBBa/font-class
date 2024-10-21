
import { Icon, generic } from "../../index";

/**
 * A component that renders the `input-pipe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=duotone input-pipe}
 * @preview ![input-pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/input-pipe.svg)
 */
const InputPipe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm64 0l512 0 0 256L64 384l0-256z" />
        <path d="M104 184c0-13.3 10.7-24 24-24s24 10.7 24 24V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184z" />
    </Icon>
);

export default InputPipe;
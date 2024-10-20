
import { Icon } from "../../index";

/**
 * A component that renders the `input-pipe` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=solid input-pipe}
 * @preview ![input-pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/input-pipe.svg)
 */
const InputPipe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 128l0 256 512 0 0-256L64 128zM0 128C0 92.7 28.7 64 64 64l512 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm144 56l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default InputPipe;
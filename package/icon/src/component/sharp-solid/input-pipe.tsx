
import { Icon } from "../../index";

/**
 * A component that renders the `input-pipe` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=sharp-solid input-pipe}
 * @preview ![input-pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/input-pipe.svg)
 */
const InputPipe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 128l0 256 512 0 0-256L64 128zM0 64l64 0 512 0 64 0 0 64 0 256 0 64-64 0L64 448 0 448l0-64L0 128 0 64zM144 184l0 144 0 24-48 0 0-24 0-144 0-24 48 0 0 24z" />
    </Icon>
);

export default InputPipe;
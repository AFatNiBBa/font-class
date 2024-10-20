
import { Icon } from "../../index";

/**
 * A component that renders the `input-pipe` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=sharp-regular input-pipe}
 * @preview ![input-pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/input-pipe.svg)
 */
const InputPipe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 112l0 288 544 0 0-288L48 112zM0 64l48 0 544 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zM144 184l0 144 0 24-48 0 0-24 0-144 0-24 48 0 0 24z" />
    </Icon>
);

export default InputPipe;
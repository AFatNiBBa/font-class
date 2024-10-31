
import { Icon } from "../../index";

/**
 * A component that renders the `input-pipe` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=sharp-thin input-pipe}
 * @preview ![input-pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/input-pipe.svg)
 */
const InputPipe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 80l0 352 608 0 0-352L16 80zM0 64l16 0 608 0 16 0 0 16 0 352 0 16-16 0L16 448 0 448l0-16L0 80 0 64zM128 168l0 176 0 8-16 0 0-8 0-176 0-8 16 0 0 8z" />
    </Icon>
);

export default InputPipe;
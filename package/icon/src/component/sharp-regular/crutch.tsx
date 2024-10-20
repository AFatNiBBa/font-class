
import { Icon } from "../../index";

/**
 * A component that renders the `crutch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crutch?s=sharp-regular crutch}
 * @preview ![crutch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/crutch.svg)
 */
const Crutch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M340.2 18.2L493.8 171.8l17 17-33.9 33.9-17-17L306.2 52.2l-17-17L323.2 1.3l17 17zM151 215L287.4 78.6l33.9 33.9L249.9 184 328 262.1l71.4-71.4 33.9 33.9L297 361l-4.9 4.9-6.8 1.5L148 397.9 52.2 493.8l-17 17L1.3 476.8l17-17L114.1 364l30.5-137.2 1.5-6.8L151 215zm143 81L216 217.9 189.9 244 167.6 344.4 268 322.1 294.1 296z" />
    </Icon>
);

export default Crutch;

import { Icon } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=sharp-regular window-maximize}
 * @preview ![window-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/window-maximize.svg)
 */
const WindowMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 432l0-208L48 224l0 208 416 0zm48-208l0 208 0 48-48 0L48 480 0 480l0-48L0 224 0 80 0 32l48 0 416 0 48 0 0 48 0 144z" />
    </Icon>
);

export default WindowMaximize;
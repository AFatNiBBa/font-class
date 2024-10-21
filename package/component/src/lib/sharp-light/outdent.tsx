
import { Icon } from "../../index";

/**
 * A component that renders the `outdent` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outdent?s=sharp-light outdent}
 * @preview ![outdent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/outdent.svg)
 */
const Outdent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 48L0 80l16 0 416 0 16 0 0-32-16 0L16 48 0 48zM192 176l0 32 16 0 224 0 16 0 0-32-16 0-224 0-16 0zm16 128l-16 0 0 32 16 0 224 0 16 0 0-32-16 0-224 0zM0 432l0 32 16 0 416 0 16 0 0-32-16 0L16 432 0 432zM27.3 236.3L0 256l27.3 19.7L112 336.9 144 360l0-39.5 0-129.1 0-39.5-32 23.1L27.3 236.3zM112 214.6l0 82.8L54.7 256 112 214.6z" />
    </Icon>
);

export default Outdent;
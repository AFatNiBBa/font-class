
import { Icon } from "../../index";

/**
 * A component that renders the `dryer` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=sharp-thin dryer}
 * @preview ![dryer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dryer.svg)
 */
const Dryer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 16l0 480L16 496 16 16l416 0zM16 0L0 0 0 16 0 496l0 16 16 0 416 0 16 0 0-16 0-480 0-16L432 0 16 0zM96 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 336c-68 0-123.6-53-127.8-120l87.8 0 8 0 0-16-8 0-87.8 0C100.4 229 156 176 224 176c70.7 0 128 57.3 128 128s-57.3 128-128 128zm0 16a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default Dryer;
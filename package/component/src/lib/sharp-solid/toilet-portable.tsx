
import { Icon } from "../../index";

/**
 * A component that renders the `toilet-portable` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-portable?s=sharp-solid toilet-portable}
 * @preview ![toilet-portable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/toilet-portable.svg)
 */
const ToiletPortable: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 0L0 64l320 0 0-64L0 0zM24 96L0 96l0 24L0 488l0 24 48 0 0-24 0-8 224 0 0 8 0 24 48 0 0-24 0-368 0-24-24 0L24 96zM256 240l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default ToiletPortable;
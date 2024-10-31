
import { Icon } from "../../index";

/**
 * A component that renders the `boot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=sharp-solid boot}
 * @preview ![boot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/boot.svg)
 */
const Boot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L352 0l0 96L0 96 0 0zM0 480l0-32 512 0 0 32-32 32-64 0-32-32-32 32-64 0-32-32-32 32-64 0-32-32L96 512l-64 0L0 480zm0-64L0 128l320 0 0 32-48 0-16 0 0 32 16 0 48 0 0 32-48 0-16 0 0 32 16 0 48 0 192 48 0 112L0 416z" />
    </Icon>
);

export default Boot;
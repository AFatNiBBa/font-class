
import { Icon } from "../../index";

/**
 * A component that renders the `boot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=sharp-regular boot}
 * @preview ![boot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/boot.svg)
 */
const Boot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 0L0 0 0 128l384 0L384 0zM0 464l0 16 32 32 64 0 32-32 32 32 64 0 32-32 32 32 64 0 32-32 32 32 64 0 32-32 0-16 0-16 0-32 0-128L352 240l0-80-48 0 0 32-64 0-16 0 0 32 16 0 64 0 0 16 0 16-64 0-16 0 0 32 16 0 105 0 119 35.7 0 92.3L48 416l0-256L0 160 0 416l0 32 0 16z" />
    </Icon>
);

export default Boot;
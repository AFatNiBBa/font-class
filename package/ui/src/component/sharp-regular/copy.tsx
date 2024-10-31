
import { Icon } from "../../index";

/**
 * A component that renders the `copy` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=sharp-regular copy}
 * @preview ![copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/copy.svg)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 336l-224 0 0-288 156.1 0L400 115.9 400 336zM448 96L352 0 176 0 128 0l0 48 0 288 0 48 48 0 224 0 48 0 0-48 0-240zM48 128L0 128l0 48L0 464l0 48 48 0 224 0 48 0 0-48 0-48-48 0 0 48L48 464l0-288 48 0 0-48-48 0z" />
    </Icon>
);

export default Copy;
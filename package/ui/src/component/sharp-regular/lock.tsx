
import { Icon } from "../../index";

/**
 * A component that renders the `lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=sharp-regular lock}
 * @preview ![lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lock.svg)
 */
const Lock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 128l0 64 160 0 0-64c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 48 0 48 0 0 48 0 224 0 48-48 0L48 512 0 512l0-48L0 240l0-48 48 0 48 0zM48 464l352 0 0-224L48 240l0 224z" />
    </Icon>
);

export default Lock;
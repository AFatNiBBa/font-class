
import { Icon } from "../../index";

/**
 * A component that renders the `unlock-keyhole` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=sharp-solid unlock-keyhole}
 * @preview ![unlock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/unlock-keyhole.svg)
 */
const UnlockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 144c0-44.2 35.8-80 80-80c38.7 0 71 27.5 78.4 64l64.7 0C359.2 56 298.1 0 224 0C144.5 0 80 64.5 80 144l0 48L0 192 0 512l448 0 0-320-304 0 0-48zM256 384l-64 0-32 0 0-64 32 0 64 0 32 0 0 64-32 0z" />
    </Icon>
);

export default UnlockKeyhole;
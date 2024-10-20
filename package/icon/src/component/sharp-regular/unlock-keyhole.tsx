
import { Icon } from "../../index";

/**
 * A component that renders the `unlock-keyhole` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=sharp-regular unlock-keyhole}
 * @preview ![unlock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/unlock-keyhole.svg)
 */
const UnlockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c-44.2 0-80 35.8-80 80l0 64 256 0 48 0 0 48 0 224 0 48-48 0L48 512 0 512l0-48L0 240l0-48 48 0 48 0 0-64C96 57.3 153.3 0 224 0c57 0 105.2 37.2 121.8 88.6l-45.7 14.8C289.8 71.2 259.6 48 224 48zM48 240l0 224 352 0 0-224L48 240zM256 376l-64 0-24 0 0-48 24 0 64 0 24 0 0 48-24 0z" />
    </Icon>
);

export default UnlockKeyhole;
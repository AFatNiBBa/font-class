
import { Icon } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=sharp-solid landmark-flag}
 * @preview ![landmark-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/landmark-flag.svg)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 0l0 96-96 0 0 32 192 0 32 0 0 64-32 0L48 192l-32 0 0-64 32 0 192 0L240 0l32 0 96 0zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 192 51.1 38.3c.1 .1 .2 .1 .2 .2L512 464l0 15.6c0 .3 0 .5 0 .8l0 31.6-32 0L32 512 0 512l0-31.6c0-.3 0-.5 0-.8L0 464l12.7-9.5c.1-.1 .2-.1 .2-.2L64 416l0-192z" />
    </Icon>
);

export default LandmarkFlag;
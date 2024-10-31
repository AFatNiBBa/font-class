
import { Icon } from "../../index";

/**
 * A component that renders the `unlock-keyhole` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=sharp-thin unlock-keyhole}
 * @preview ![unlock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/unlock-keyhole.svg)
 */
const UnlockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16c-61.9 0-112 50.1-112 112l0 64 320 0 16 0 0 16 0 288 0 16-16 0L16 512 0 512l0-16L0 208l0-16 16 0 80 0 0-64C96 57.3 153.3 0 224 0c58.9 0 108.5 39.8 123.4 93.9L332 98.1C318.9 50.8 275.5 16 224 16zM16 208l0 288 416 0 0-288-320 0-16 0-80 0zM272 336l-96 0 0 32 96 0 0-32zm16-16l0 16 0 32 0 16-16 0-96 0-16 0 0-16 0-32 0-16 16 0 96 0 16 0z" />
    </Icon>
);

export default UnlockKeyhole;
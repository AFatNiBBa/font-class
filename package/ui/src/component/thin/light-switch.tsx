
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=thin light-switch}
 * @preview ![light-switch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/light-switch.svg)
 */
const LightSwitch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 16c26.5 0 48 21.5 48 48l0 384c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l256 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM272 368c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-104 160 0 0 104zM112 144c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 104-160 0 0-104zm32-48c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-96 0zm64-40a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 400a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default LightSwitch;
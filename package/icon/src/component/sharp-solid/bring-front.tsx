
import { Icon } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=sharp-solid bring-front}
 * @preview ![bring-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bring-front.svg)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64l64 0 32 0 32 0 64 0 0-64L192 0 64 0 0 0 0 64 0 192l0 64 64 0 64 0 0-64-64 0L64 64zM480 448l-32 0-64 0 0 64 64 0 128 0 64 0 0-64 0-128 0-64-64 0-64 0 0 64 64 0 0 128-64 0-32 0zm0-352L160 96l0 320 320 0 0-320z" />
    </Icon>
);

export default BringFront;
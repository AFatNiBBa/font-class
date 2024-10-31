
import { Icon } from "../../index";

/**
 * A component that renders the `rainbow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rainbow?s=sharp-regular rainbow}
 * @preview ![rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rainbow.svg)
 */
const Rainbow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 88C169.8 88 48 209.8 48 360l0 96 0 24L0 480l0-24 0-96C0 183.3 143.3 40 320 40s320 143.3 320 320l0 96 0 24-48 0 0-24 0-96C592 209.8 470.2 88 320 88zm0 224c-26.5 0-48 21.5-48 48l0 96 0 24-48 0 0-24 0-96c0-53 43-96 96-96s96 43 96 96l0 96 0 24-48 0 0-24 0-96c0-26.5-21.5-48-48-48zM160 360l0 96 0 24-48 0 0-24 0-96c0-114.9 93.1-208 208-208s208 93.1 208 208l0 96 0 24-48 0 0-24 0-96c0-88.4-71.6-160-160-160s-160 71.6-160 160z" />
    </Icon>
);

export default Rainbow;
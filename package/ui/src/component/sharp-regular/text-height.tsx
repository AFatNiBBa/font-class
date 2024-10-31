
import { Icon } from "../../index";

/**
 * A component that renders the `text-height` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-height?s=sharp-regular text-height}
 * @preview ![text-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/text-height.svg)
 */
const TextHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 32L0 32 0 56l0 72 0 24 48 0 0-24 0-48 88 0 0 352-48 0-24 0 0 48 24 0 144 0 24 0 0-48-24 0-48 0 0-352 88 0 0 48 0 24 48 0 0-24 0-72 0-24-24 0L24 32zM497 50.2l-17-17-17 17L402.2 111l-17 17 33.9 33.9 17-17L456 125.1l0 261.7L436.2 367l-17-17L385.3 384l17 17L463 461.8l17 17 17-17L557.8 401l17-17-33.9-33.9-17 17L504 386.9l0-261.7L523.8 145l17 17L574.7 128l-17-17L497 50.2z" />
    </Icon>
);

export default TextHeight;
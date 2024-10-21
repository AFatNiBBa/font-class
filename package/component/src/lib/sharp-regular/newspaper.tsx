
import { Icon } from "../../index";

/**
 * A component that renders the `newspaper` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/newspaper?s=sharp-regular newspaper}
 * @preview ![newspaper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/newspaper.svg)
 */
const Newspaper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32l24 0 368 0 24 0 0 24 0 400 0 24-24 0-344 0-24 0-48 0-24 0-24 0L0 480l0-24L0 112 0 88l48 0 0 24 0 320 24 0 24 0L96 56l0-24zm48 400l320 0 0-352L144 80l0 352zm32-320l144 0 0 128-144 0 0-128zm200 0l32 0 24 0 0 48-24 0-32 0-24 0 0-48 24 0zm0 80l32 0 24 0 0 48-24 0-32 0-24 0 0-48 24 0zM200 272l208 0 24 0 0 48-24 0-208 0-24 0 0-48 24 0zm0 80l208 0 24 0 0 48-24 0-208 0-24 0 0-48 24 0z" />
    </Icon>
);

export default Newspaper;
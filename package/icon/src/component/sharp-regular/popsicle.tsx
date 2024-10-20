
import { Icon } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=sharp-regular popsicle}
 * @preview ![popsicle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/popsicle.svg)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 160c0-61.9-50.1-112-112-112S48 98.1 48 160l0 176 88 0 0-152 0-24 48 0 0 24 0 152 88 0 0-176zM136 384l-88 0L0 384l0-48L0 160C0 71.6 71.6 0 160 0s160 71.6 160 160l0 176 0 48-48 0-88 0 0 104 0 24-48 0 0-24 0-104z" />
    </Icon>
);

export default Popsicle;

import { Icon } from "../../index";

/**
 * A component that renders the `cup-togo` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cup-togo?s=sharp-solid cup-togo}
 * @preview ![cup-togo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cup-togo.svg)
 */
const CupTogo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 0L384 0l32 64 32 0 0 64-32 0L32 128 0 128 0 64l32 0L64 0zM80 512L48 160l352 0L368 512 80 512zM327 256l-206 0 14.5 160 176.9 0L327 256z" />
    </Icon>
);

export default CupTogo;

import { Icon } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=light popsicle}
 * @preview ![popsicle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/popsicle.svg)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M288 160c0-70.7-57.3-128-128-128S32 89.3 32 160l0 176c0 8.8 7.2 16 16 16l96 0 0-160c0-8.8 7.2-16 16-16s16 7.2 16 16l0 160 96 0c8.8 0 16-7.2 16-16l0-176zM144 384l-96 0c-26.5 0-48-21.5-48-48L0 160C0 71.6 71.6 0 160 0s160 71.6 160 160l0 176c0 26.5-21.5 48-48 48l-96 0 0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112z" />
    </Icon>
);

export default Popsicle;
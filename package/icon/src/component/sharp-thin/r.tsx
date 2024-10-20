
import { Icon } from "../../index";

/**
 * A component that renders the `r` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/r?s=sharp-thin r}
 * @preview ![r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/r.svg)
 */
const R: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M8 32L0 32l0 8L0 280 0 472l0 8 16 0 0-8 0-184 160 0 6.6 0 2.6 4.2L301.1 480l18.8 0L201.2 287.7C267.6 283 320 227.6 320 160c0-70.7-57.3-128-128-128L8 32zM176 272L16 272 16 48l176 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-16 0z" />
    </Icon>
);

export default R;
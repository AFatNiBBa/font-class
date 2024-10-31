
import { Icon } from "../../index";

/**
 * A component that renders the `r` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/r?s=sharp-light r}
 * @preview ![r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/r.svg)
 */
const R: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 32L0 32 0 48 0 272 0 464l0 16 32 0 0-16 0-176 134.9 0L282.1 480l37.3 0L203.9 287.5C269 281.4 320 226.7 320 160c0-70.7-57.3-128-128-128L16 32zM176 256L32 256 32 64l160 0c53 0 96 43 96 96s-43 96-96 96l-16 0z" />
    </Icon>
);

export default R;
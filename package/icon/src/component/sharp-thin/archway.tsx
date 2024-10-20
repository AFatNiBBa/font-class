
import { Icon } from "../../index";

/**
 * A component that renders the `archway` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=sharp-thin archway}
 * @preview ![archway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/archway.svg)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l8 0 24 0 16 0 416 0 16 0 24 0 8 0 0 16-8 0-24 0 0 416 24 0 8 0 0 16-8 0-24 0-16 0-32 0-8 0-56 0-16 0 0-16 0-112c0-53-43-96-96-96s-96 43-96 96l0 112 0 16-16 0-56 0-8 0-32 0-16 0L8 480l-8 0 0-16 8 0 24 0L32 48 8 48 0 48 0 32zM48 48l0 416 32 0 8 0 56 0 0-112c0-61.9 50.1-112 112-112s112 50.1 112 112l0 112 56 0 8 0 32 0 0-416L48 48zm56 96l304 0 8 0 0 16-8 0-304 0-8 0 0-16 8 0z" />
    </Icon>
);

export default Archway;
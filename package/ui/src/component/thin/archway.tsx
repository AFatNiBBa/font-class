
import { Icon } from "../../index";

/**
 * A component that renders the `archway` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=thin archway}
 * @preview ![archway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/archway.svg)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 40c0-4.4 3.6-8 8-8l32 0 432 0 32 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 416 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-32 0-40 0-72 0c-4.4 0-8-3.6-8-8l0-120c0-53-43-96-96-96s-96 43-96 96l0 120c0 4.4-3.6 8-8 8l-72 0-40 0L8 480c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0L32 48 8 48c-4.4 0-8-3.6-8-8zm48 8l0 416 32 0 64 0 0-112c0-61.9 50.1-112 112-112s112 50.1 112 112l0 112 64 0 32 0 0-416L48 48zm56 96l304 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-304 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default Archway;
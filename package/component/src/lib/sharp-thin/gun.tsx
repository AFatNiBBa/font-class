
import { Icon } from "../../index";

/**
 * A component that renders the `gun` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=sharp-thin gun}
 * @preview ![gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gun.svg)
 */
const Gun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 32l0 8 0 24 56 0 8 0 0 8 0 128 0 8-8 0-84.7 0-29.7 29.7-2.3 2.3-3.3 0-66.2 0-30.2 90.5-1.8 5.5-5.8 0-100 0L208 480 48.5 480 32 480l4-16L92 240 8 240l-8 0 0-8L0 72l0-8 8 0 488 0 0-24 0-8 16 0zM338.2 320l26.7-80L268 240l-20 80 90.2 0zM108.5 240l-56 224 143 0 56-224-143 0zM16 80l0 144 428.7 0 29.7-29.7 2.3-2.3 3.3 0 80 0 0-112-48 0-16 0L16 80zm56 48l432 0 8 0 0 16-8 0L72 144l-8 0 0-16 8 0z" />
    </Icon>
);

export default Gun;
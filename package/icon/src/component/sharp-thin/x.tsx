
import { Icon } from "../../index";

/**
 * A component that renders the `x` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x?s=sharp-thin x}
 * @preview ![x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/x.svg)
 */
const X: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M361.5 32L382 32 202.3 256 382 480l-20.5 0L192 268.8 22.5 480 2 480 181.7 256 2 32l20.5 0L192 243.2 361.5 32z" />
    </Icon>
);

export default X;
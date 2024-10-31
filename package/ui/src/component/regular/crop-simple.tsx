
import { Icon } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=regular crop-simple}
 * @preview ![crop-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/crop-simple.svg)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 24c0-13.3-10.7-24-24-24S80 10.7 80 24l0 56L24 80C10.7 80 0 90.7 0 104s10.7 24 24 24l56 0 0 248c0 30.9 25.1 56 56 56l216 0 0-48-216 0c-4.4 0-8-3.6-8-8l0-352zM384 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-248c0-30.9-25.1-56-56-56L160 80l0 48 216 0c4.4 0 8 3.6 8 8l0 352z" />
    </Icon>
);

export default CropSimple;
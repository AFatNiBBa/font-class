
import { Icon } from "../../index";

/**
 * A component that renders the `percent` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=sharp-regular percent}
 * @preview ![percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/percent.svg)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M369 113l17-17L352 62.1 335 79 15 399l-17 17L32 449.9l17-17L369 113zM16 80l0 96 96 0 0-96L16 80zM272 336l0 96 96 0 0-96-96 0z" />
    </Icon>
);

export default Percent;
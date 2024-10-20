
import { Icon } from "../../index";

/**
 * A component that renders the `percent` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=sharp-thin percent}
 * @preview ![percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/percent.svg)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M112 80l0 96-96 0 0-96 96 0zM16 64L0 64 0 80l0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0L16 64zM368 336l0 96-96 0 0-96 96 0zm-96-16l-16 0 0 16 0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0-96 0zM362.3 74.3l-352 352 11.3 11.3 352-352L362.3 74.3z" />
    </Icon>
);

export default Percent;
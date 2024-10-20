
import { Icon } from "../../index";

/**
 * A component that renders the `bars` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars?s=light bars}
 * @preview ![bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bars.svg)
 */
const Bars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 80c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 96C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 256c-8.8 0-16-7.2-16-16zM448 400c0 8.8-7.2 16-16 16L16 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l416 0c8.8 0 16 7.2 16 16z" />
    </Icon>
);

export default Bars;
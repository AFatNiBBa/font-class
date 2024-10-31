
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=sharp-regular pipe-valve}
 * @preview ![pipe-valve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pipe-valve.svg)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 56l0-24-48 0 0 24 0 21.6L96 64l0 64 136-13.6 0 77.6L48 192l0-8 0-24L0 160l0 24 0 32L0 424l0 32 0 24 48 0 0-24 0-8 416 0 0 8 0 24 48 0 0-24 0-32 0-208 0-32 0-24-48 0 0 24 0 8-184 0 0-77.6L416 128l0-64L280 77.6 280 56zM48 400l0-160 208 0 208 0 0 160L48 400z" />
    </Icon>
);

export default PipeValve;

import { Icon } from "../../index";

/**
 * A component that renders the `siren` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=sharp-solid siren}
 * @preview ![siren](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/siren.svg)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 96L48 352l57.9 0 22.2-178 1.8-14 32.2 0-2.2 18L138.1 352 400 352 368 96 80 96zM448 384L0 384l0 96 448 0 0-96z" />
    </Icon>
);

export default Siren;

import { Icon } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=sharp-thin refrigerator}
 * @preview ![refrigerator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/refrigerator.svg)
 */
const Refrigerator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 16l0 160-96 0 0-72 0-8-16 0 0 8 0 72L16 176 16 16l352 0zM256 192l0 184 0 8 16 0 0-8 0-184 96 0 0 304L16 496l0-304 240 0zM0 16L0 184 0 496l0 16 16 0 352 0 16 0 0-16 0-312 0-168 0-16L368 0 16 0 0 0 0 16z" />
    </Icon>
);

export default Refrigerator;
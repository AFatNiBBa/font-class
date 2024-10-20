
import { Icon } from "../../index";

/**
 * A component that renders the `leaf-maple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf-maple?s=sharp-solid leaf-maple}
 * @preview ![leaf-maple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/leaf-maple.svg)
 */
const LeafMaple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 64L480 32 448 144l64 32L384 272l80 0-16 64 56 48-56 48 8 64L272 448l-32 48L183.6 394.4 90.2 487.7l-17 17L39.3 470.7l17-17L247.7 262.3l-22.3-22.3-11.3 11.3-84 84L16 272l48-32L16 56l64 8L128 8l48 56 64-16 0 80L336 0l32 64z" />
    </Icon>
);

export default LeafMaple;
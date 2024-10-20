
import { Icon } from "../../index";

/**
 * A component that renders the `car-side` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-side?s=sharp-solid car-side}
 * @preview ![car-side](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/car-side.svg)
 */
const CarSide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M106.3 64L128 64l256 0 15.4 0L409 76 527.4 224 640 224l0 208-65.3 0c-7.6 45.4-47.1 80-94.7 80s-87.1-34.6-94.7-80l-130.7 0c-7.6 45.4-47.1 80-94.7 80s-87.1-34.6-94.7-80L0 432 0 224l42.3 0 56-139.9 8-20.1zM434.7 432a48 48 0 1 0 90.5-32 48 48 0 1 0 -90.5 32zM208 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM111.3 224L224 224l0-96-74.3 0-38.4 96zM272 224l173.4 0-76.8-96L272 128l0 96z" />
    </Icon>
);

export default CarSide;
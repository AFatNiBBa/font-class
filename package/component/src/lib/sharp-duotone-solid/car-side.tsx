
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-side` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-side?s=sharp-duotone-solid car-side}
 * @preview ![car-side](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-side.svg)
 */
const CarSide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 432a80 80 0 1 0 160 0A80 80 0 1 0 64 432zm47.3-208L224 224c0-32 0-64 0-96l-74.3 0c-12.8 32-25.6 64-38.4 96zM272 128c0 32 0 64 0 96l173.4 0-76.8-96L272 128zM416 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M106.3 64L128 64l256 0 15.4 0L409 76 527.4 224 640 224l0 208-32 0c0-61.9-50.1-112-112-112s-112 50.1-112 112l-128 0c0-61.9-50.1-112-112-112S32 370.1 32 432L0 432 0 224l42.3 0 56-139.9 8-20.1zm4.9 160L224 224l0-96-74.3 0-38.4 96zM272 224l173.4 0-76.8-96L272 128l0 96z" />
    </Icon>
);

export default CarSide;

import { Icon } from "../../index";

/**
 * A component that renders the `caravan-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan-simple?s=sharp-regular caravan-simple}
 * @preview ![caravan-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/caravan-simple.svg)
 */
const CaravanSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 80l0 288 60.8 0c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48L528 368l0-176c0-61.9-50.1-112-112-112L48 80zM96 416l-48 0L0 416l0-48L0 80 0 32l48 0 368 0c88.4 0 160 71.6 160 160l0 176 40 0 24 0 0 48-24 0-40 0-48 0-240 0c0 53-43 96-96 96s-96-43-96-96zm0-288l192 0 0 128L96 256l0-128zm352 0l0 128-128 0 0-128 128 0zM240 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CaravanSimple;
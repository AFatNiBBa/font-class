
import { Icon } from "../../index";

/**
 * A component that renders the `caravan-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan-simple?s=sharp-solid caravan-simple}
 * @preview ![caravan-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/caravan-simple.svg)
 */
const CaravanSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 32L0 32 0 416l96 0c0 53 43 96 96 96s96-43 96-96l288 0 32 0 32 0 0-64-32 0-32 0 0-160c0-88.4-71.6-160-160-160zM64 128l192 0 0 128L64 256l0-128zm384 0l0 128-128 0 0-128 128 0zM144 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default CaravanSimple;

import { Icon } from "../../index";

/**
 * A component that renders the `truck` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck?s=regular truck}
 * @preview ![truck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/truck.svg)
 */
const Truck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 48c8.8 0 16 7.2 16 16l0 288c0 8.8-7.2 16-16 16l-32 0-76.8 0c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48L64 368c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l288 0zm32 368c0 53 43 96 96 96s96-43 96-96l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-122.7c0-14.9-5.9-29.1-16.4-39.6l-93.3-93.3C487.8 101.9 473.6 96 458.7 96L416 96l0-32c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64c0 53 43 96 96 96s96-43 96-96l64 0 32 0 24 0 8 0zM557.7 239.6c.1 .1 .3 .3 .4 .4l-142 0 0-96 42.7 0c2.1 0 4.2 .8 5.7 2.3l93.3 93.3zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Truck;
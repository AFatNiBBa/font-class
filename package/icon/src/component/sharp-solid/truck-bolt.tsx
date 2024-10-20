
import { Icon } from "../../index";

/**
 * A component that renders the `truck-bolt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-bolt?s=sharp-solid truck-bolt}
 * @preview ![truck-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/truck-bolt.svg)
 */
const TruckBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L416 0l0 96 80 0L608 208l0 144 32 0 0 64-32 0-32 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96L0 416 0 0zM416 256l128 0 0-16-80-80-48 0 0 96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 192l88 0-24 96L288 160l-88 0 24-96L96 192z" />
    </Icon>
);

export default TruckBolt;
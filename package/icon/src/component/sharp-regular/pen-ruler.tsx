
import { Icon } from "../../index";

/**
 * A component that renders the `pen-ruler` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-ruler?s=sharp-regular pen-ruler}
 * @preview ![pen-ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pen-ruler.svg)
 */
const PenRuler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 512l33.9-33.9 60.1-60.1L512 384l-33.9-33.9-67.5-67.5-33.9 33.9 18.2 18.2-14.1 14.1L369.4 360 392 382.6l11.3-11.3 14.1-14.1L444.1 384 384 444.1l-67.5-67.5-33.9 33.9 67.5 67.5L384 512zM229.5 101.5L161.9 33.9 128 0 94.1 33.9 33.9 94.1 0 128l33.9 33.9 67.6 67.6 33.9-33.9L67.9 128 128 67.9l26.7 26.7-14.1 14.1L129.4 120 152 142.6l11.3-11.3 14.1-14.1 18.2 18.2 33.9-33.9zM10.2 461L0 512l51-10.2L160 480 478.1 161.9 512 128 478.1 94.1 417.9 33.9 384 0 350.1 33.9 32 352 10.2 461zm51-10.2l15-75.1L321.9 129.9l60.1 60.1L136.3 435.8l-75.1 15z" />
    </Icon>
);

export default PenRuler;
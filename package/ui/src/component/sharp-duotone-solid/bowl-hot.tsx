
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-hot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-hot?s=sharp-duotone-solid bowl-hot}
 * @preview ![bowl-hot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bowl-hot.svg)
 */
const BowlHot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0l0 24c0 45.1 21.2 69 37.7 87.5l.4 .4C181.5 129.3 192 141.5 192 168l0 24 48 0 0-24c0-45.1-21.2-69-37.7-87.5l-.4-.4C186.5 62.7 176 50.5 176 24l0-24L128 0zM256 0l0 24c0 45.1 21.2 69 37.7 87.5l.4 .4C309.5 129.3 320 141.5 320 168l0 24 48 0 0-24c0-45.1-21.2-69-37.7-87.5l-.4-.4C314.5 62.7 304 50.5 304 24l0-24L256 0z" />
        <path d="M512 224L0 224l3.6 61.2C8.5 368.1 58 438.2 128 472.9l0 39.1 256 0 0-39.1c70-34.6 119.5-104.8 124.4-187.7L512 224z" />
    </Icon>
);

export default BowlHot;
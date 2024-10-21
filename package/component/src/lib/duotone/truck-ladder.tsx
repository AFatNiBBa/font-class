
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-ladder` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ladder?s=duotone truck-ladder}
 * @preview ![truck-ladder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-ladder.svg)
 */
const TruckLadder: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 24C0 10.7 10.7 0 24 0L328 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 96 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 192c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-96-8 0C10.7 48 0 37.3 0 24zM80 48l0 96 32 0 0-96L80 48zM240 432A80 80 0 1 1 80 432a80 80 0 1 1 160 0zM160 48l0 96 32 0 0-96-32 0zm80 0l0 96 32 0 0-96-32 0zM560 432a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
        <path d="M416 96c-17.7 0-32 14.3-32 32l0 96L48 224c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l1.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l98.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l1.1 0c26.5 0 48-21.5 48-48l0-80 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L544 114.7c-12-12-28.3-18.7-45.3-18.7L416 96zM576 256l-128 0 0-96 50.7 0L576 237.3l0 18.7z" />
    </Icon>
);

export default TruckLadder;
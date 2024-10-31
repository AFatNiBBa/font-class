
import { Icon } from "../../index";

/**
 * A component that renders the `mushroom` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mushroom?s=solid mushroom}
 * @preview ![mushroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mushroom.svg)
 */
const Mushroom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 258.1C24 133.2 125.2 32 250.1 32l11.8 0C386.8 32 488 133.2 488 258.1c0 34.2-27.7 61.9-61.9 61.9L313 320l-114 0L85.9 320C51.7 320 24 292.3 24 258.1zm387.5-96.7c-3.7-.9-7.5-1.4-11.5-1.4c-26.5 0-48 21.5-48 48s21.5 48 48 48c15.9 0 30-7.7 38.7-19.6c-3.3-27.4-12.9-52.9-27.2-75zM145.9 113.6c8 35.7 39.9 62.4 78.1 62.4c44.2 0 80-35.8 80-80c0-3.8-.3-7.5-.8-11.2C290 81.7 276.1 80 261.9 80l-11.8 0c-38.9 0-74.9 12.5-104.2 33.6zM191 352l130 0L343 440.2c2.4 9.6 .2 19.7-5.8 27.5s-15.4 12.3-25.2 12.3l-112 0c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5L191 352zM160 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Mushroom;
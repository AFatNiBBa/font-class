
import { Icon } from "../../index";

/**
 * A component that renders the `bird` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bird?s=sharp-light bird}
 * @preview ![bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bird.svg)
 */
const Bird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 192L32 192l0 8c0 101.6 82.4 184 184 184s184-82.4 184-184l0-96c0-39.8-32.2-72-72-72s-72 32.2-72 72l0 56 0 32-32 0zM0 200l0-8 0-32 32 0 160 0 32 0 0-32 0-24C224 46.6 270.6 0 328 0c43.2 0 80.2 26.3 95.9 63.8L494.8 115l17 12.3-16.3 13.1L432 191.7l0 8.3c0 88.6-53.4 164.8-129.7 198.1L362.6 512l-36.2 0L271.7 408.7c-17.8 4.7-36.4 7.3-55.7 7.3l-.2 0 50.8 96-36.2 0-52.6-99.4C76.7 394.6 0 306.2 0 200zm432-49.5l27.1-21.8L432 109.1l0 41.4zM304 120a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Bird;
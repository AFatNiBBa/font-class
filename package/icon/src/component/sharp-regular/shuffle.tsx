
import { Icon } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=sharp-regular shuffle}
 * @preview ![shuffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shuffle.svg)
 */
const Shuffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M429.8 47l57 57 1.3 0 0 1.3 5.8 5.8 17 17-17 17-5.8 5.8 0 1.3-1.3 0-57 57-17 17L378.9 192l17-17 23-23L332 152l-58 77.3-30-40 56.8-75.7L308 104l12 0 98.9 0-23-23-17-17 33.9-33.9 17 17zM204 322.7l-56.8 75.7L140 408l-12 0L24 408 0 408l0-48 24 0 92 0 58-77.3 30 40zm208.8-36.6l17 17 57 57 1.3 0 0 1.3 5.8 5.8 17 17-17 17-5.8 5.8 0 1.3-1.3 0-57 57-17 17L378.9 448l17-17 23-23L320 408l-12 0-7.2-9.6L116 152l-92 0L0 152l0-48 24 0 104 0 12 0 7.2 9.6L332 360l86.9 0-23-23-17-17 33.9-33.9z" />
    </Icon>
);

export default Shuffle;

import { Icon } from "../../index";

/**
 * A component that renders the `person-praying` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-praying?s=sharp-solid person-praying}
 * @preview ![person-praying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-praying.svg)
 */
const PersonPraying: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64a64 64 0 1 1 128 0A64 64 0 1 1 224 64zm-72.1 80l24.1 0 48 0 20.4 0 12 16.5 39.1 53.8L334.8 182l31-25.3 50.7 61.9-31 25.3-72.1 59-32.8 26.8-24.9-34.2L232.7 264l-45 90 116.1 85.8L280 512 72 512l-40 0 0-80 40 0 86.6 0-53.2-39.3c-34.9-25.8-45.8-73.3-25.6-111.8l60.8-115.5L151.9 144z" />
    </Icon>
);

export default PersonPraying;
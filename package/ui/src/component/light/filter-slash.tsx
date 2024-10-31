
import { Icon } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=light filter-slash}
 * @preview ![filter-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/filter-slash.svg)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zm541 93.3c5.9-7.1 9.1-16 9.1-25.2C576 49.7 558.3 32 536.5 32L139.6 32l40.5 32 356.4 0c4.2 0 7.5 3.4 7.5 7.5c0 1.8-.6 3.4-1.7 4.8l-137 165.5 25.1 19.8L566.9 96.7zM352 362.8l0 83.3c0 1-.8 1.9-1.9 1.9c-.4 0-.8-.1-1.1-.4l-61-47.4 0-87.9L256 287l0 113.2c0 9.9 4.6 19.2 12.4 25.3l61 47.4c5.9 4.6 13.3 7.1 20.8 7.1c18.7 0 33.9-15.2 33.9-33.9l0-58.1-32-25.3z" />
    </Icon>
);

export default FilterSlash;
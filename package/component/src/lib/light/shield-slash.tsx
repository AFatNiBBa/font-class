
import { Icon } from "../../index";

/**
 * A component that renders the `shield-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-slash?s=light shield-slash}
 * @preview ![shield-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shield-slash.svg)
 */
const ShieldSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM418 414.9c-23.5 22.9-51.8 43.3-85.4 59.4c-7.9 3.8-17.2 3.8-25.1 0C169.2 408.2 122.9 270.7 113.8 174.7L80.1 148.2c2.6 100.7 45.8 274.7 213.5 355c16.7 8 36.1 8 52.8 0c38.6-18.5 70.6-41.9 97-68.2l-25.4-20zM295 7.8L174 59.2l28.6 22.6L307.5 37.3c8-3.4 17-3.4 25 0l176.7 75c11.3 4.8 18.9 15.5 18.8 27.6c-.2 45.8-9.6 108.6-37.1 169.6l25.8 20.4c32.5-68.7 43-139.7 43.3-189.8c.1-26.2-16.3-47.9-38.3-57.2L345 7.8c-16-6.8-34-6.8-50 0z" />
    </Icon>
);

export default ShieldSlash;
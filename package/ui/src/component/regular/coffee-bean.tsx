
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-bean` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-bean?s=regular coffee-bean}
 * @preview ![coffee-bean](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/coffee-bean.svg)
 */
const CoffeeBean: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M385.9 133.1c-13.3 27.7-29.9 56.7-48.9 75.8c-34.5 34.8-69.6 52.3-101.5 68.2l-.8 .4c-32.1 16-61 30.6-89.7 59.4c-16.6 16.7-34.4 47-49.8 77.5c23.2 14.8 54.2 20.9 90.3 15.8c45.5-6.5 96.1-30.9 138.9-73.8s67.3-93.4 73.8-138.9c4.7-33.2-.1-61.9-12.3-84.4zM350.1 95.9c-22.9-13.6-52.9-19.1-87.7-14.2c-45.5 6.5-96.1 30.9-138.9 73.8S56.3 249 49.8 294.5c-4.6 32-.3 59.9 11.1 82.1c14.5-27.1 31.8-55 50.1-73.4c34.5-34.8 69.6-52.3 101.5-68.2l.8-.4c32.1-16 61-30.6 89.7-59.4c16.6-16.8 33.4-47.8 47.2-79.1zm53-19.1c74.2 74.2 54.2 214.6-44.8 313.6s-239.4 119-313.6 44.8S-9.4 220.6 89.6 121.6s239.4-119 313.6-44.8z" />
    </Icon>
);

export default CoffeeBean;
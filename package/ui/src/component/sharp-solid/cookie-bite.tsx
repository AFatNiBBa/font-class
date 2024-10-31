
import { Icon } from "../../index";

/**
 * A component that renders the `cookie-bite` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cookie-bite?s=sharp-solid cookie-bite}
 * @preview ![cookie-bite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cookie-bite.svg)
 */
const CookieBite: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256.8 22.1L213.9 16 81.7 86.7 16 222.1 42 370.4 149.8 475l148.3 21 132.3-70.7L496 289.9l-6.1-34.7c-61.5-6.7-109.9-57.1-113.7-119.5C313.8 132 263.5 83.6 256.8 22.1zM176 368l-32-32 32-32 32 32-32 32zm0-192l32-32 32 32-32 32-32-32zM368 336l-32-32 32-32 32 32-32 32z" />
    </Icon>
);

export default CookieBite;
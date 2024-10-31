
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=regular coffee-pot}
 * @preview ![coffee-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/coffee-pot.svg)
 */
const CoffeePot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M88 80c-22.1 0-40 17.9-40 40l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80C0 71.4 39.4 32 88 32l34.4 0L192 32l261.6 0C468.2 32 480 43.8 480 58.4c0 3.7-.8 7.3-2.3 10.7l-48.4 109c50 34.7 82.7 92.5 82.7 157.9l0 8c0 55.5-34.6 99.4-55.9 121.2C446.2 475.3 432.3 480 418 480L158 480c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344l0-8c0-65.4 32.7-123.2 82.7-157.9L103.1 80 88 80zm296.8 80l35.6-80L192 80l-36.4 0 35.6 80 193.6 0zm1.2 48L190 208c-41.8 21.6-71.7 63.1-77.1 112l350.2 0c-5.4-48.9-35.3-90.4-77.1-112zm32.2 224l-260.5 0 .2 0L418 432l.2 0z" />
    </Icon>
);

export default CoffeePot;

import { Icon } from "../../index";

/**
 * A component that renders the `yandex-international` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yandex-international?s=brands yandex-international}
 * @preview ![yandex-international](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/yandex-international.svg)
 */
const YandexInternational: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M129.5 512V345.9L18.5 48h55.8l81.8 229.7L250.2 0h51.3L180.8 347.8V512h-51.3z" />
    </Icon>
);

export default YandexInternational;
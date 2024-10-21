
import { Icon } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=thin refrigerator}
 * @preview ![refrigerator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/refrigerator.svg)
 */
const Refrigerator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M288 16c44.2 0 80 35.8 80 80l0 80-96 0 0-72c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 72L16 176l0-80c0-44.2 35.8-80 80-80l192 0zM256 192l0 184c0 4.4 3.6 8 8 8s8-3.6 8-8l0-184 96 0 0 256c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-256 240 0zM0 96l0 88L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-264 0-88c0-53-43-96-96-96L96 0C43 0 0 43 0 96z" />
    </Icon>
);

export default Refrigerator;

import { Icon } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=solid refrigerator}
 * @preview ![refrigerator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/refrigerator.svg)
 */
const Refrigerator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 0C43 0 0 43 0 96l0 64 288 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 64 0 0-64c0-53-43-96-96-96L96 0zM384 192l-64 0 0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176L0 192 0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256z" />
    </Icon>
);

export default Refrigerator;